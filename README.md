
# Virtual Pet

Create your own virtual pet, like a Tamagotchi.<br> It is able to get older, get hungry, and get unfit if you don't take it for a walk 😉 <br>
It also dies at a certain age. 💀


## Set up

* Create a virtual-pet directory from the command line and initialize a git repository within that directory
```
$ mkdir virtual-pet
$ git init
```
* Initialize an NPM project in that repository
```
$ npm init
```
* Install Jest and save it as a dev dependency
```
$ npm install -D jest
```
* Set Jest as the test command for your project - Alter the package.json file => test = "jest"
* Create a README file (some tips [here](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2))
```
$ touch README.md
```
* Create GitHub repository called 'virtual-pet'
* Get the SSH link and link it to your local repository with:
```
$ git remote add origin {the ssh link you just copied}
```
* Create a .gitignore file and add node_modules to it

After the last step, checking `git status` you should not see _node_modules_ in the list of the files.

## Running Tests

You have to be in the right directory to run:
```
$ npm test
```
## Built with

* JavaScript












