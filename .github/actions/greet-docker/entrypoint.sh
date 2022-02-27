#!/bin/sh

echo "Hello $1"

echo "::group::This is a expandable log group"
echo "::debug::This is a debug message"
echo "::warning::This is a warning message"
echo "::error::This is a error message"
echo "::endgroup::"

someMessage = "This is a secret"
echo "::add-mask::$someMessage"
echo "Secret : $someMessage"

todaytime = $(date)
echo "::set-output name=time-of-greet::$todaytime"

echo "{'expvar'}={'This is a exported variable'}" >> $GITHUB_ENV