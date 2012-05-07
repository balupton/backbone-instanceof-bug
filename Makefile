clean:
	rm -Rf */node_modules/ */npm-debug.log

setup:
	make clean
	npm install
	cd sub_modules/custom-collections; npm link
	npm link custom-collections
	cd sub_modules/custom-models; npm link
	npm link custom-models

test:
	node app.js

.PHONY: clean setup test