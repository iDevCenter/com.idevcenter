#!/usr/bin/env sh

TEMPDIR=$(mktemp -d -t idc)

cp -r build/ $TEMPDIR

pushd $TEMPDIR

git init
git add .
git commit --message "Release"
git remote add origin git@github.com:iDevCenter/idevcenter.github.io.git
git push --force --set-upstream origin master

popd