#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "${HUSKY_DEBUG}" = "1" ] && echo "husky (debug) - $1"
  }
  readonly husky_skip_init=1
  export husky_skip_init
  debug "starting..."
  if [ ! -f package.json ]; then
    echo "Can't find package.json (see https://typicode.github.io/husky/#/?id=custom-directory)" >&2
    exit 1
  fi
  command -v npm >/dev/null 2>&1 || { echo >&2 "npm is required"; exit 1; }
  husky_run() {
    debug "running npm command - $1"
    npm run $1
  }
fi
