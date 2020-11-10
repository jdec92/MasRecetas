FROM nginx:latest

ADD nginx.conf /etc/nginx/
ADD route.conf /etc/nginx/conf.d/

RUN rm /etc/nginx/conf.d/default.conf

RUN echo "upstream php-upstream { server php:9000; }" > /etc/nginx/conf.d/upstream.conf

CMD ["nginx"]

EXPOSE 80
EXPOSE 443






