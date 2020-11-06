# This defines our starting point
FROM node:latest

RUN npm install -g @angular/cli

ADD entrypoint.sh /var/www/entrypoint.sh
RUN chmod +x /var/www/entrypoint.sh

WORKDIR /var/www/angular/

ENTRYPOINT ["/var/www/entrypoint.sh"]

CMD ["npm","start"]