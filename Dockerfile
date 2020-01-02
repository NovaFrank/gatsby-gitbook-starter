FROM nginx
VOLUME /tmp
ENV LANG en_US.UTF-8
COPY ./app-nginx/ /etc/nginx/
COPY ./public/ /usr/share/nginx/html/
COPY ./public/help-static/ /usr/share/nginx/html/