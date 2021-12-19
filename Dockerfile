#Imagen base
FROM node:12
#Definir el directorio de trabajo
WORKDIR /app
#Copia los packages al directorio de trabajo
COPY package*.json ./
#Ejecutar la instalacion de las depencias
RUN npm install
#Copia el contenido de la aplicacion
#del directorio local hacia el directorio de trabajo
COPY . .
#Ejecutar el comando para arrancar el servidor
CMD ["npm", "start"]
#Exponer el puerto
EXPOSE 8081