#!/bin/bash

echo -e "\n=> Running codegen and checking diff..."

yarn codegen

echo "=> Check if commited files matches generated sample"
if [[ `git status --porcelain` ]]; then
  echo -e "x> Error!\n"
  echo "=> Following files do not have expected result:"
  git --no-pager diff HEAD --color
  git ls-files --others --exclude-standard
  echo -e "\n=> Have you tried running 'yarn codegen'?"
  exit 1
fi

echo "=> Done checking codegen"
