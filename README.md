# Testing of an Item Player
```
To start testing the Item Player, the developer needs to do following things:
* Download the starter kit and update the following files:
  * package.json
  * sdkConfig.json file, defining the dependencies.
  * “test” folder which will have a “test.html” file and “item.json”.
  * “server.js” file to serve the test.html file.
* Run “npm install” command.
* Run “node server” command to setup the the local server.
 *Run “npm run build” to build the Item Player code.
* Open the url [http://localhost:3000/](http://localhost:3000/) in the browser, which will redirect to the Item Player Test Bench.
```
## Guidelines:
```
* The “server.js” file provided in the starter kit creates a local server at port number 3000. The developer should make sure that the port 3000 is available. If the port is not available, please refer to Appendix A.
* The package.json provided in the starter kit contains a “postbuild” script which invokes an npm module named “module-config-generator”. The developer should not remove this script. For more details please refer to Appendix B.
* The developer needs to provide at least one Item json (in the specified format) to launch the Item Player.
```
## Appendix A
```
If the port 3000 is not available, following files would need to be updated:
* The _“postbuild”_ script mentioned in package.json file
* test.html needs to be updated to pass the updated local url
```
## Appendix B
```
[Module-config-generator](https://github.com/jasdeep-compro/module-config-generator/blob/master/README.md) is a npm CLI package which perform the following things:
* It reads the package.json and sdkConfig.json files from the root directory and generates a new json file [config.json](https://jsoneditoronline.org/?id=b56049512d9b4c96af9f233a703f5efc) in the test folder of the root directory. [sdkConfig.json](https://jsoneditoronline.org/?id=64f849dd0add417494ce1eea29f68e2a) is an optional file it may or may not exist in root directory.
* Name, main and  version are the required fields of package.json. Module-config-generator only deal with these fields.
* type and subType are required field in sdkConfig.json
* Css and resources are the additional css and js file required to render the item player.
* Dependencies is an array of dependencies which is required to render the item player eg: react, react-dom etc.
* localDependencies is an object that contains all local dependencies as a key and file location as value.
```
 **Note:** Allow cross-origin resource sharing (cors) on server to access package.json and sdkConfig.json.