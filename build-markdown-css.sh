#!/usr/bin/env bash

lessc markdown.less markdown.css
cp markdown.css app/

echo "[`date`] compiled: markdown.less"
