## For React Dockerfile

```
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","start"]
```

## For Nodejs Dockerfile

```
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node","index.js"]
```