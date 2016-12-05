#!/usr/bin/env bash

cd /usr/src/codingame/lib

cp -r /tmp/codemachines/* ./

fail=`node_modules/.bin/mocha test/$1 --reporter json | tail -n+2 | jq .stats.failures`

success=`[ $fail -eq 0 ] && echo true || echo false`

echo "{\"success\":"$success",\"compilation\":{}, \"execution\":{}}"

exit

