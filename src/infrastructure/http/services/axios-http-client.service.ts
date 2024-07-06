import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { HttpClient } from '../interfaces/http-client.interface';

@Injectable()
export class AxiosHttpClientService implements HttpClient {
  private readonly logger = new Logger(AxiosHttpClientService.name);
  constructor(private readonly http: HttpService) {}

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    this.logger.debug({
      msg: 'AxiosHttpClientService GET request',
      url,
      config,
    });

    const { data } = await firstValueFrom(
      this.http.get<T>(url, config).pipe(
        catchError((error: AxiosError) => {
          this.logger.error({
            msg: 'Error on AxiosHttpClientService GET request',
            errorMessage: error.message,
            code: error.code,
            response: error.response?.data,
          });
          throw new Error(error.message);
        }),
      ),
    );

    this.logger.debug({
      msg: 'AxiosHttpClientService GET response',
      data,
    });
    return data;
  }
}
