.PHONY: coverage

VERSIONS = 6 7 8 9 10 11 21 24 25

nvm:
	@. ${NVM_DIR}/nvm.sh && nvm $(CMD)

nvm--install:
	@make nvm CMD="install $(VERSION)"

nvm--run: nvm--install
	@make nvm CMD="run $(VERSION) $(CMD)"

nvm--exec: nvm--install
	@make nvm CMD="exec $(VERSION) $(CMD)"

init:
	@for version in $(VERSIONS); do make nvm--install VERSION="$$version"; done
	@make nvm--exec VERSION=8 CMD="npm install"

coverage--bin: docs
	@node bin/docdown index.js doc/index.md --force style=github title="docdown <sup>$(shell git rev-parse HEAD)</sup>" url=https://github.com/satisfactory-dev/docdown/blob/$(shell git rev-parse HEAD)/index.js
	@git restore doc
	./bin/docdown.js > /dev/null 2>&1 || true

coverage:
	@git clean -fxd coverage
	@make nvm--exec VERSION=10 CMD="npm install -g c8@7"
	@make nvm--exec VERSION=10 CMD="c8 --reporter lcovonly -o ./coverage/from-usage/ make coverage--bin"
	@make nvm--exec VERSION=21 CMD="npm install -g c8@10"
	@make nvm--exec VERSION=21 CMD="c8 --reporter lcovonly -o ./coverage/from-tests/ node --test './tests/**/*.spec.mjs'"
	@cp -r ./coverage/*/tmp/*.json ./coverage/tmp
	@make nvm--exec VERSION=21 CMD="c8 report"

docs:
	@node bin/docdown index.js doc/index.md style=github title="docdown <sup>$(shell git rev-parse HEAD)</sup>" url=https://github.com/satisfactory-dev/docdown/blob/$(shell git rev-parse HEAD)/index.js
	@find lib -iname "*.js" | sed "s/\.js$///" | xargs -I{} node bin/docdown "{}.js" "doc/{}.md" style=github title="docdown <sup>$(shell git rev-parse HEAD)</sup>" url="https://github.com/satisfactory-dev/docdown/blob/$(shell git rev-parse HEAD)/{}.js"
	@find bin-lib -iname "*.js" | sed "s/\.js$///" | xargs -I{} node bin/docdown "{}.js" "doc/{}.md" style=github title="docdown <sup>$(shell git rev-parse HEAD)</sup>" url="https://github.com/satisfactory-dev/docdown/blob/$(shell git rev-parse HEAD)/{}.js"
