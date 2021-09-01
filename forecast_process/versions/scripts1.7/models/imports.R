pkgs <- readRDS("/forecast/models/pkgs.rds")
install.packages(rownames(pkgs))