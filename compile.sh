#!/bin/bash
echo 'Compiling all, please wait...'

sass src/main.scss:dist/main.css

sass src/content.scss:dist/content.css
styledown dist/content.css config.md > guide/content.html

sass src/layout.scss:dist/layout.css
styledown dist/layout.css config.md > guide/layout.html

sass src/utilities.scss:dist/utilities.css
styledown dist/utilities.css config.md > guide/utilities.html
