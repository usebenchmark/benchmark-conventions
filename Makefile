build: node_modules
	node_modules/.bin/metalsmith

node_modules: package.json
	npm install

serve:
	node server.js

.PHONY: build
.PHONY: serve
