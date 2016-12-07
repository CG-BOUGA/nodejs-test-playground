v1

# Builder

Build a Builder with the command:

    docker build -t nodejsbuilder .


Then, test it by mounting 2 volumes: 

- /project/source: contains the project source
- /project/target: contains the processed source

    docker run -v /Users/jerome/Documents/work/codingame/projects/courses/nodejs-hello-world/project:/project/source -v /Users/jerome/Documents/work/codingame/projects/courses/nodejs-hello-world/tmp/target:/project/target nodejsbuilder


# Runner

Build a runner with the command:

    docker build -t nodejsrunner .

Then, test it by mounting 2 volumes:

- /project/target: contains the processed source created by the packager
- /project/answer: contains the source files modified by the user in the codingame IDE


    docker run -v /Users/jerome/Documents/work/codingame/projects/courses/nodejs-hello-world/tmp/target:/project/target -v /Users/jerome/Documents/work/codingame/projects/courses/nodejs-hello-world/stubs/invalid:/project/answer -v /Users/jerome/Documents/work/codingame/projects/courses/nodejs-hello-world/tmp/workspace:/project/workspace nodejsrunner test.js 


# Deploy

To deploy a docker:

    docker login  -u _json_key -p "$(cat gcloud)" https://us.gcr.io
    docker tag  nodejsbuilder us.gcr.io/codingame-test/nodejsbuilder:1
    docker push us.gcr.io/codingame-test/nodejsbuilder:1

    docker tag  nodejsrunner us.gcr.io/codingame-test/nodejsrunner:1
    docker push us.gcr.io/codingame-test/nodejsrunner:1



# Notes
 
 - change the folder names
 - yaml or yml should be accepted
 - remove the description field in yaml and keep only longDescription but rename it to "description" 


 Result of a runner:


{
	execution:[
		{
			notFound: false,
			programStderr: "sortie erreur",
			programStdout: "sortie standard",
			success: true,
			testReference: $1,
			logs: [
				{
					message: "message",
					stacktrace: [
						{
							container: "class",
							function: "function",
							line: 5
						}
					]
				}
			]
		}
	],

	compilation: {
		success: true,
		logs: [
			{
				type: "error|warning",
				line: 5,
				column: 20 (optional),
				message: "error message",
				filename: "file1.js"
			}
		]
	}
}


 