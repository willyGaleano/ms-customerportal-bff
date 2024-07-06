# MS CUSTOMER PORTAL BFF

## Instalación y ejecución ⚙️

- Crear archivo .env usando .env.template

  ```bash
  #COMMON
  ENVIRONMENT=LOCAL
  NODE_ENV=development
  LOG_LEVEL=debug
  APP_NAME=ms-customerportal-bff
  HTTP_PORT=3000

  #REDIS
  REDIS_HOST=localhost
  REDIS_PORT=6379
  REDIS_PWD=123456
  REDIS_USE_TLS=false
  CACHE_DEFAULT_TTL_SECONDS=60

  #HTTP
  HTTP_TIMEOUT=5000
  HTTP_MAX_REDIRECTS=3

  #EXTERNAL APIS
  CLIENT_MS_URL=http://localhost:3001/ms-client-bs/v1
  CLIENT_PORTFOLIO_MS_URL=http://localhost:3002/ms-portfolio-bs/v1

  #PORTAL
  PORTAL_DETAIL_CACHE_TTL_SECONDS=3600
  ```

- Instalar dependencias y levantar proyecto

  ```bash
  npm i
  #opcional
  npm install -g pino-pretty
  #DB
  docker-compose up -d
  #Usando pino-pretty
  npm run start:dev | pino-pretty
  #Sin pino-pretty
  npm run start:dev
  ```

- [Ir a la documentación en Apollo Server](http://localhost:3000/graphql)

  ![swagger](/etc/docs/images/apollo_server.png)
  
## Portal Detail Service 🚀

- Portal Detail Query
  ![portal_detail](/etc/docs/images/portal_detail.png)
  
- Portal Detail Redis Cache
  ![portal_detail_redis](/etc/docs/images/portal_detail_redis.png)

## Construido con 🛠️

- Nestjs
- Nodejs v20.15.0
- Typescript
- Redis
- GraphQL
- Docker
- Fastify

### Autor ✒️

- Williams David Galeano Gomez, <willyrhcp96@gmail.com>
