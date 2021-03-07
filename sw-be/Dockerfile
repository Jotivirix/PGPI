FROM php:8.0.2-fpm

RUN apt-get update -y && apt-get install -y libmcrypt-dev openssl
RUN apt-get update -y && \
    apt-get install -y libmcrypt-dev && \
    pecl install mcrypt && \
    docker-php-ext-enable mcrypt && \
    apt install zip unzip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app
COPY . /app

CMD bash -c "composer install --prefer-dist && php artisan serve --host 0.0.0.0 --port 8000"
EXPOSE 8000
