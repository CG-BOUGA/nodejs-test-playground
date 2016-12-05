
# Builder

Build a packager with the command:

    docker build -t nodejspackager .


Then, test it by mounting 2 volumes: 

- /usr/src/app: contains the project source
- /tmp/distro: contains the processed source


    docker run -v /Users/jerome/Desktop/nodejs/course:/usr/src/app -v /Users/jerome/Desktop/nodejs/target:/tmp/distro nodejspackager


# Runner

Build a runner with the command:

    docker build -t nodejsrunner .

Then, test it by mounting 2 volumes:

- /usr/src/codingame/lib: contains the processed source created by the packager
- /tmp/codemachines: contains the source files modified by the user in the codingame IDE


    docker run -v /Users/jerome/Desktop/nodejs/target:/usr/src/codingame/lib -v /Users/jerome/Desktop/nodejs/stubs/invalid:/tmp/codemachines nodejsrunner test.js


# Deploy

To deploy a docker:

    docker login  -u _json_key -p "$(cat gcloud)" https://us.gcr.io
    docker tag  nodejspackager us.gcr.io/codingame-test/nodejspackager:1
    docker push us.gcr.io/codingame-test/nodejspackager:1



# Notes
 
 - change the folder names
 - yaml or yml should be accepted
 - remove the description field in yaml and keep only longDescription but rename it to "description" 