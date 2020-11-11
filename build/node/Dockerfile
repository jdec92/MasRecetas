FROM node:latest

WORKDIR /var/www/angular/

COPY angular/package.json angular/package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install
RUN npm install -g @angular/cli

COPY angular .

RUN npm run build
# start app
CMD ["npm", "start"]