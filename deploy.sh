#!/usr/bin/env sh

./build.sh

echo "Deploying site..."

echo "  Creating temp directory..."

TEMPDIR=$(mktemp -d -t idc)
cp -r build/ $TEMPDIR

pushd $TEMPDIR > /dev/null

echo "  Initializing repository..."
git init --quiet
git add . > /dev/null
git commit --quiet --message "Release" > /dev/null
git remote add origin git@github.com:iDevCenter/idevcenter.github.io.git > /dev/null

echo "  Pushing repository..."
git push --quiet --force --set-upstream origin master > /dev/null

popd > /dev/null

echo "Deploying site done."
