#!/usr/bin/env bash

cd /project/workspace

cp -r /project/target/* .

cp -r /project/answer/* .

fail=`node_modules/mocha/bin/mocha test/$1 --reporter json | tail -n+2 | jq .stats.failures`

success=`[ $fail -eq 0 ] && echo true || echo false`

echo "{\"success\":"$success",\"compilation\":{}, \"execution\":{}}"

exit

