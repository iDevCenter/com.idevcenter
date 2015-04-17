#!/usr/bin/env sh

echo "Building site..."

wintersmith build --quiet --chdir src --locals locals.release.json --clean --output ../build

echo "Building site done."
