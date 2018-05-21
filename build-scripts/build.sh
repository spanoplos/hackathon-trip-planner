#!/bin/bash

set -e

export ot_build=$1

echo "##teamcity[blockOpened name='yarn install']"
cd /app && yarn
echo "##teamcity[blockClosed name='yarn install']"

echo "##teamcity[blockOpened name='Smartling translations']"
cd /app && yarn i18n
echo "##teamcity[blockClosed name='Smartling translations']"

echo "##teamcity[blockOpened name='clean and build']"
cd /app && yarn build
echo "##teamcity[blockClosed name='clean and build']"

echo "##teamcity[blockOpened name='package']"
cd /app && yarn package
echo "##teamcity[blockClosed name='package']"

echo "##teamcity[blockOpened name='debug info']"
cd /app/package && ls -la
echo "##teamcity[blockClosed name='debug info']"