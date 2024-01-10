FROM node:18
WORKDIR /app
COPY ./src/backend .
RUN yarn install
RUN yarn build
EXPOSE 3001
CMD ["yarn", "start:dev"]