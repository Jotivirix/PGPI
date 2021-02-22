FROM php:8.0.2-fpm

RUN apt-get update -y && apt-get install -y libmcrypt-dev openssl
RUN apt-get update -y && \
    apt-get install -y libmcrypt-dev && \
    pecl install mcrypt && \
    docker-php-ext-enable mcrypt

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
WORKDIR /app
COPY . /app

CMD php artisan serve --host=127.0.0.1 --port=8000
EXPOSE 8000
