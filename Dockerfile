FROM node:20
WORKDIR /app
COPY . .
RUN npm install cors express helmet env prisma
EXPOSE 3000
CMD ["node", "app.js"]

