#!/usr/bin/env bash
git diff --name-only | while read LINE;
echo diffs detected pull-request invalid;
do exit 1;
done;
