FROM debian:buster
#FROM buildpack-deps:buster

LABEL maintainer="stevenbetancurt@hotmail.com"

WORKDIR /forecast

COPY ./models /forecast/models
COPY ./test /forecast/test

ENV MODELS_DIR=/forecast/models
ENV MODELS_TMP=/forecast/tmp
ENV MODELS_WORKDIR=/forecast/workdir
ENV MODELS_ORYZA_MODEL=oryza_model
ENV MODELS_ORYZA_DIR=${MODELS_DIR}/${MODELS_ORYZA_MODEL}
ENV MODELS_DSSAT_MODEL=dssat-csm
ENV MODELS_DSSAT_GITHUB=dssat-csm-os
ENV MODELS_DSSAT_GITHUB_URL=https://github.com/DSSAT/dssat-csm-os
ENV MODELS_DSSAT_DIR=${MODELS_DIR}/${MODELS_DSSAT_MODEL}
ENV PATH="${MODELS_DIR}:${PATH}"

# Install dependencies
RUN apt-get update \
    && apt-get install -y \
        vim \
        unzip \
        dirmngr \
        software-properties-common \
        apt-transport-https \
        cmake \
        gfortran \
        git \
    && apt-key adv --keyserver keys.gnupg.net --recv-key 'E19F5F87128899B192B1A2C2AD5F960A256A04AF' \
    && add-apt-repository 'deb http://cloud.r-project.org/bin/linux/debian buster-cran35/' \
    && apt-get update \
    && apt-get install -y \
        r-base \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir ${MODELS_WORKDIR} \
    && mkdir ${MODELS_TMP} 

# Configuring models
RUN cd ${MODELS_DIR} \
    && unzip ./ORYZAv3_lin.zip \
    && mv ./Linux ./${MODELS_ORYZA_MODEL} \
    && chmod +x ${MODELS_DIR}/oryza \
    && mv ./ORYZAv3_lin.zip ${MODELS_TMP}/ \
    # DSSAT
    && cd ${MODELS_DIR} \ 
    && git clone ${MODELS_DSSAT_GITHUB_URL} \
    && cd ${MODELS_DIR}/${MODELS_DSSAT_GITHUB} \
    && mkdir build \
    && cd build \
    && cmake .. \ 
    && make \
    && mkdir ${MODELS_DSSAT_DIR} \
    && mv ./bin/dscsm047 ${MODELS_DSSAT_DIR}/dscsm047 \
    && cp -r ../Data/. ${MODELS_DSSAT_DIR}/ \
    && mv ${MODELS_DIR}/DSSATPRO.L47 ${MODELS_DSSAT_DIR}/DSSATPRO.L47 \
    && chmod +x ${MODELS_DSSAT_DIR}/dscsm047 \
    && cd ${MODELS_DIR} \
    && mv ${MODELS_DIR}/${MODELS_DSSAT_GITHUB} ${MODELS_TMP}/${MODELS_DSSAT_GITHUB}

# docker build -t stevensotelo/aclimate_process:latest .
# docker tag xx stevensotelo/aclimate_process:latest

# docker run -it --rm -v D:/CIAT/Code/USAID/usaid_forecast_docker/forecast_process/workdir:/forecast/workdir stevensotelo/aclimate_process:latest /bin/bash

# https://github.com/DSSAT/dssat-csm-os