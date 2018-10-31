FROM node:8

# author
MAINTAINER ajsan

# Create app directory
WORKDIR /src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# install app runtimes and modules
RUN npm install express
RUN npm install express-graphql
RUN npm install graphql
RUN npm install wget

RUN npm install
# If you are building your code for production

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "npm", "start" ]
