#!/bin/bash
echo 'Compiling all, please wait...'

sass src/all.scss:dist/all.css

sass src/layout.scss:dist/layout.css
styledown dist/layout.css config.md > guide/layout.html

sass src/elements.scss:dist/elements.css
styledown dist/elements.css config.md > guide/elements.html

sass src/helpers.scss:dist/helpers.css
styledown dist/helpers.css config.md > guide/helpers.html
