FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock* ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173
CMD ["npx", "vite"]
CMD ["npm", "run", "dev"]