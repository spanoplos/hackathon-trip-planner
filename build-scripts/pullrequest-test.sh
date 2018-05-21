#!/bin/bash

set -e

cd /app && yarn
cd /app && yarn i18n
cd /app && yarn test
