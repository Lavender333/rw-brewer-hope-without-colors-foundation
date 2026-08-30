#!/usr/bin/env bash
set -euo pipefail

pages_dir="$PWD/_site"
base_path="/rw-brewer-hope-without-colors-foundation"

rm -rf "$pages_dir"
mkdir -p "$pages_dir"
cp -R dist/client/. "$pages_dir/"

routes=("" "about" "pillars" "programs" "events" "legacy" "get-involved" "contact" "privacy" "terms" "thank-you")
for route in "${routes[@]}"; do
  if [[ -z "$route" ]]; then
    output="$pages_dir/index.html"
  else
    mkdir -p "$pages_dir/$route"
    output="$pages_dir/$route/index.html"
  fi
  curl --fail --silent --show-error "http://127.0.0.1:3000/$route" --output "$output"
done

node scripts/rewrite-github-pages.mjs "$pages_dir" "$base_path"
touch "$pages_dir/.nojekyll"
