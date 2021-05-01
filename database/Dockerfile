FROM mongo:3.6
LABEL maintainer="stevenbetancurt@hotmail.com"

COPY conf/conf.dev.js /docker-entrypoint-initdb.d/

# docker build -t stevensotelo/agroclimate_platform_db:latest .

# docker run --name ag_db -p 27017:27017 --env-file ./conf/env.list -d stevensotelo/agroclimate_platform_db:latest
# docker run --name ag_db -p 27017:27017 --env-file ./conf/env.list -v /local/path:/data/db -d stevensotelo/agroclimate_platform_db:latest

# docker exec -it ag_db bash
# docker logs ag_db