install:
	yarn install && make client-install

client-install:
	cd client && yarn install

clean-module:
	rm -rf node_modules & make clean-client-module

clean-client-module: 
	cd client && rm -rf node_modules
