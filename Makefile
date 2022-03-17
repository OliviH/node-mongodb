.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## INIT PROJECT
	sudo ./scripts/init.sh

start: ## START PROJECT
	sudo ./scripts/start.sh

stop: ## STOP PROJECT
	sudo ./scripts/stop.sh

clear: ## CLEAR PROJECT
	sudo ./scripts/clear.sh
	