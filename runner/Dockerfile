FROM node:7

RUN apt-get update
RUN apt-get install -y jq

WORKDIR /usr/src/codingame/nodejs-runner/
COPY run.sh .
ENTRYPOINT ["/usr/src/codingame/nodejs-runner/run.sh"]
