import { ConfigProvider } from '../types/http.type';

export interface HttpClient {
  get<T>(url: string, options?: ConfigProvider): Promise<T>;
}
