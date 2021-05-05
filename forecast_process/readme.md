# Forecast Process Image

This folder contains the resources and definitions to build
an image to run simulations for forecast process for climate
and crop.

## How to use



### Install

docker pull stevensotelo/aclimate_process:latest

### Run

docker run -it --rm -v D:/my_folder/workdir:/forecast/workdir stevensotelo/aclimate_process:latest /bin/bash

### Test

cd /forecast/test

oryza /forecast/test/oryza
dssat B DSSBatch.v47