FROM node:latest

RUN npm install -g @angular/cli

ADD build/node/entrypoint.sh /var/www/entrypoint.sh
RUN chmod +x /var/www/entrypoint.sh
# set working directory
WORKDIR /var/www/angular/

ENTRYPOINT ["/var/www/entrypoint.sh"]

# start app
CMD ["npm", "start"]