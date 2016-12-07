FROM node:7

RUN apt-get update
RUN apt-get install -y jq

WORKDIR /project
COPY run.sh .
ENTRYPOINT ["/project/run.sh"]
