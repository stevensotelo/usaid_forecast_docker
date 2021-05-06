# Forecast Process Image

This folder contains the resources and definitions to build
an image to run simulations for both forecast process climate
and crop. It includes the models and some examples which allow
users debug what would be wrong.

The models which are inside of this repostory are:

* CPT 15 - Climate Predictable Tool
* Oryza v3 - Rice model
* DSSAT 4.7 - 


### Install

    docker pull stevensotelo/aclimate_process:latest

### Run

    docker run -it --rm -v D:/my_folder/workdir:/forecast/workdir stevensotelo/aclimate_process:latest /bin/bash

### Test

    oryza /forecast/test/oryza

    dssat /forecast/test/dssat B DSSBatch.v47