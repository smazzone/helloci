FROM node:23
ARG DOCKER_TAG
ENV APP_VERSION=$DOCKER_TAG
RUN echo "Bulding Docker image version: $APP_VERSION"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN groupadd -r appgroup && useradd -r -g appgroup -m -s /bin/bash appuser
USER appuser
CMD [ "npm", "start" ]