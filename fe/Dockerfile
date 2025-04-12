FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# These values must be available when we run `npm run build`
ARG VITE_API_PORT
ARG VITE_USE_ENTRA_AUTH
ARG VITE_ENTRA_CLIENT_ID
ARG VITE_ENTRA_TENANT_ID

ENV VITE_API_PORT=$VITE_API_PORT
ENV VITE_USE_ENTRA_AUTH=$VITE_USE_ENTRA_AUTH
ENV VITE_ENTRA_CLIENT_ID=$VITE_ENTRA_CLIENT_ID
ENV VITE_ENTRA_TENANT_ID=$VITE_ENTRA_TENANT_ID

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
