# Setting-up Item Player code base

To start the development of a new Item Player, the developer needs to do following things:
* Download the starter kit and update the following files:
  * package.json
  * sdkConfig.json file, defining the dependencies.
  * _“test”_ folder which will have a _“test.html”_ file and _“item.json”_.
  * _“server.js”_ file to serve cross-origin resource sharing (cors) of test.html, package.json & sdk.config.json 
* Run _“npm install”_ command.
* Run _“node server”_ command to setup the the local server.
* Develop your item player implementing the IItem Interface and configure the _"npm run build"_ command.
* Run _“npm run build”_ to build the Item Player code.
* Open the url [http://localhost:3000/](http://localhost:3000/) in the browser, which will redirect to the Item Player Test Bench.

## Guidelines:

* The _“server.js”_ file provided in the starter kit creates a local server at port number 3000. The developer should make sure that the port 3000 is available. If the port is not available, please refer to Appendix A.
* The package.json provided in the starter kit contains a “postbuild” script which invokes an npm module named _“module-config-generator”_. The developer should not remove this script. For more details please refer to Appendix B.
* The developer needs to provide at least one Item json (in the specified format) to launch the Item Player.
* Leonardo libraries are available in the Leonardo private npm repository. To access this repository, user need to execute following commands
> 1. npm config set registry http://npm.leonardodls.com
> 2. npm set //npm.leonardodls.com/:_authToken=< token >

## Appendix A

If the port 3000 is not available, new port needs to be updated at following places:
* _“postbuild”_ script mentioned in package.json file
* queryParam mentioned in _"test.html"_ file

## Appendix B

[Module-config-generator](https://github.com/jasdeep-compro/module-config-generator/blob/master/README.md) is a npm CLI package which perform the following things:
* It reads the package.json and sdk.config.json files from the root directory and generates a new json file [config.json](https://jsoneditoronline.org/?id=b56049512d9b4c96af9f233a703f5efc) in the test folder of the root directory. [sdk.config.json](https://jsoneditoronline.org/?id=64f849dd0add417494ce1eea29f68e2a) is an optional file it may or may not exist in root directory.
* Name, main and  version are the required fields of package.json. Module-config-generator only deal with these fields.
* type and subType are required field in sdk.config.json
* css and resources are the additional css and js files required to render the item player.
* dependencies is an array of dependencies which is required to render the item player eg: react, react-dom etc.
* path contains the path mapping for the local modules which are not published yet. Note: these modules need to be published before publishing the Item Player module.
