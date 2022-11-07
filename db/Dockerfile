FROM postgres:15
ENV POSTGRES_PASSWORD=my-secret-pw
ENV POSTGRES_USER=docker
COPY ./db.sql /docker-entrypoint-initdb.d
EXPOSE 5432