@app
akila-analytics

@aws
runtime nodejs18.x
# concurrency 1
# memory 1152
# profile default
region us-east-1
# timeout 30

@http
/*
  method any
  src server

@plugins
plugin-remix
  src plugin-remix.js

@static
