.PHONY: coverage

VERSIONS = 6 7 8 9 10 11 24 25

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

coverage:
	@make nvm--exec VERSION=10 CMD="npm install -g c8@7"
	@make nvm--exec VERSION=10 CMD="c8 make docs"

docs:
	@node bin/docdown index.js doc/index.md style=github title="docdown <sup>$(shell git rev-parse HEAD)</sup>" url=https://github.com/satisfactory-dev/docdown/blob/$(shell git rev-parse HEAD)/index.js
	@find lib -iname "*.js" | sed "s/\.js$///" | xargs -I{} node bin/docdown "{}.js" "doc/{}.md" style=github title="docdown <sup>$(shell git rev-parse HEAD)</sup>" url="https://github.com/satisfactory-dev/docdown/blob/$(shell git rev-parse HEAD)/{}.js"
