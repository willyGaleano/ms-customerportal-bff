# Paso 1: Imagen base
FROM node:20.15.0

# Paso 2: Directorio de trabajo
WORKDIR /usr/src/app

# Paso 3: Copia de archivos de proyecto
COPY package*.json ./

# Paso 4: Instalación de dependencias
RUN npm install

# Si estás construyendo tu código para producción
# RUN npm ci --only=production

COPY . .

# Paso 5: Exposición de puerto
EXPOSE 3000

# Paso 6: Comando para iniciar la aplicación
CMD ["npm", "run", "start"]