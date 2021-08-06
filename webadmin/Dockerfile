FROM  mcr.microsoft.com/dotnet/core/aspnet:2.2
LABEL maintainer="stevenbetancurt@hotmail.com"

WORKDIR /app

COPY site/ ./

VOLUME [ "/app" ]

EXPOSE 80
#EXPOSE 443

ENTRYPOINT ["dotnet", "CIAT.DAPA.USAID.Forecast.WebAdmin.dll"]

# docker build -t stevensotelo/agroclimate_platform_webadmin:latest .

# docker run --name ag_webadmin -p 8000:80  --env-file ./conf/env.list -d stevensotelo/agroclimate_platform_webadmin:latest
# docker run --name ag_webadmin -p 8000:80  --env-file ./conf/env.list -v G:/CIAT/Code/USAID/usaid_forecast_docker/webadmin/site:/app -d stevensotelo/agroclimate_platform_webadmin:latest

# docker exec -it ag_webadmin bash
# docker logs ag_webadmin