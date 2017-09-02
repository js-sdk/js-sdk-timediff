BABEL=./node_modules/babel-cli/bin/babel.js
BROWSERIFY=./node_modules/browserify/bin/cmd.js
MOCHA=./node_modules/mocha/bin/mocha

CFLAGS=--plugins transform-es2015-modules-umd
TEST_CFLAGS=--compilers js:babel-register --require should

ifeq ("$(DEV)", "1")
TEST_CFLAGS+= -w
endif

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/timediff.js: src/index.js
	$(BABEL) $< -o $@

dist/timediff.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/timediff.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

compile: pre-build dist/timediff.js dist/timediff.min.js

all: compile lib/timediff.js

test:
	$(MOCHA) $(TEST_CFLAGS) tests/*.js

clean:
	rm -rf lib dist

clean-all: clean
	rm -rf node_modules
