# Forecast Process Image
This repository contains all resources needed to execute the agroclimate forecast
using the methodology of aclimate platform. The models which are inside of this repostory are:

* CPT - Climate Predictable Tool
* Oryza - Rice model
* DSSAT - Maiz model

## Repository
This repository is composed by a set of folders which have specific functions. The following list
describes each directory:

### models
This folder has the models for climate and crops, further it has the scritps
which allows call them. Also it includes the R Packages version which should be installed.
This folder you will find inside of the container in the path: **/forecast/models**.

### test
This folder contains a set of raw files which can be used for testing models
and validate the format. This folder you will find inside of the container in the path: **/forecast/test**.

### versions
It has all versions of the image Docker with all resources for that versions.

## How to use
The following section explains a couple of things that you should take into account when you
are trying to run the image.

### Install
The installation process requires that **Docker** system is installed. Once you have installed
the Docker you just need to execute the following command, which download the image form Docker hub:

``` bash
docker pull stevensotelo/aclimate_process:latest
```

### Run
This image has a folder in which you can share information between host and the docker container. The folder
is **workdir** (located in /forecast/workdir). You should connect a folder from your PC with this volume in the
image. The following command describes how to execute an instance of the images like a Docker container, further
it connects a local folder (D:/my_folder/workdir) with the volume in the docker (/forecast/workdir).

``` bash
docker run -it --rm -v D:/my_folder/workdir:/forecast/workdir stevensotelo/aclimate_process:latest /bin/bash
```

### Test
We have include a couple of test cases in order to allow users validate that the models are running well. 
``` bash
oryza /forecast/test/oryza

dssat /forecast/test/dssat B DSSBatch.v47

CPT.x
```

# VERSIONS

### oryza3.dssat47
This image contains the model Oryza v3 and dssat v47. It doesn't have the scripts to execute forecast process.

### oryza3.dssat47.cpt150510
This image contains the model Oryza v3, dssat v47 and CPT v15.05.10. It doesn't have the scripts to execute forecast process.

### script1.5
This image contains the models and scripts to execute a forecast process. The models implemented are: Oryza v3, dssat v47 and CPT v15.05.10. The scripts are in the folder /forecast/scripts

