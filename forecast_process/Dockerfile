FROM debian:buster

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
ENV MODELS_CPT_MODEL=CPT
ENV MODELS_CPT_VERSION=15.5.10
ENV MODELS_CPT_SOURCE=${MODELS_CPT_MODEL}.${MODELS_CPT_VERSION}.tar.gz
ENV MODELS_CPT_DIR=${MODELS_DIR}/${MODELS_CPT_MODEL}
ENV CPT_BIN_DIR=${MODELS_CPT_DIR}/${MODELS_CPT_VERSION}/bin
ENV SCRIPTS_VERSION=1.8
ENV SCRIPTS_DIR=/forecast/usaid_procesos_interfaz
ENV SCRIPTS_NAME=usaid_procesos_interfaz
ENV SCRIPTS_CODE=https://github.com/CIAT-DAPA/usaid_procesos_interfaz/releases/download/v${SCRIPTS_VERSION}/${SCRIPTS_NAME}.zip
ENV PATH="${MODELS_DIR}:${PATH}"
ENV PATH="${CPT_BIN_DIR}:${PATH}"
ENV N_CORES=2


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
        wget \
    && wget https://download.visualstudio.microsoft.com/download/pr/647f8505-3bf0-48c5-ac0f-3839be6816d7/d0c2762ded5a1ded3c79b1e495e43b7c/dotnet-sdk-2.2.203-linux-x64.tar.gz \
    && mkdir ~/dotnet-2.2-203 \
    && tar -xvf dotnet-sdk-2.2.203-linux-x64.tar.gz -C ~/dotnet-2.2-203 \
    && ln -s ~/dotnet-2.2-203/dotnet /usr/bin/dotnet \
    && rm dotnet-sdk-2.2.203-linux-x64.tar.gz \
    && apt-get update \
    && apt-get install -y \
        r-base \
        gdal-bin \
        proj-bin \
        libgdal-dev \
        libproj-dev \
        libcurl4-openssl-dev \
        libssl-dev \
        libxml2-dev \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir ${MODELS_WORKDIR} \
    && mkdir ${MODELS_TMP} 
    

    # Oryza
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
    && mv ${MODELS_DIR}/${MODELS_DSSAT_GITHUB} ${MODELS_TMP}/${MODELS_DSSAT_GITHUB} \
    # CPT
    && cd ${MODELS_DIR} \ 
    && tar xzvf ${MODELS_CPT_SOURCE} \
    && cd ${MODELS_CPT_DIR}/${MODELS_CPT_VERSION} \
    && make \
    && make  install \
    && make deepclean \
    && cd ${MODELS_DIR} \
    && mv ${MODELS_DIR}/${MODELS_CPT_SOURCE} ${MODELS_TMP}/ \
    # Scripts
    && mkdir ${SCRIPTS_DIR} \    
    && cd ${SCRIPTS_DIR} \ 
    && wget ${SCRIPTS_CODE} \
    && unzip ${SCRIPTS_NAME}.zip \
    && rm ${SCRIPTS_NAME}.zip \
    && Rscript ${MODELS_DIR}/imports.R \
    && mv ${MODELS_DIR}/imports.R ${MODELS_TMP}/ \
    && mv ${MODELS_DIR}/pkgs.rds ${MODELS_TMP}/ 


# docker build -t stevensotelo/aclimate_process:latest .
# docker tag 0a1002a8a03d stevensotelo/aclimate_process:latest

# docker run -it --rm -v D:/CIAT/Code/USAID/usaid_forecast_docker/forecast_process/workdir:/forecast/workdir stevensotelo/aclimate_process:latest /bin/bash 
# docker run -it --rm -e N_CORES=10 -v D:/CIAT/Code/USAID/usaid_forecast_docker/forecast_process/workdir:/forecast/workdir stevensotelo/aclimate_process:latest /bin/bash