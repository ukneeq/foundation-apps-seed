# foundation-apps-seed — Seed for Apps using Foundation for Apps w/Angularjs
[![Foundation for Apps Tutorial](http://fedil.ukneeq.com/wp-content/uploads/2015/02/foundation-apps-angularjs.png)](http://fedil.ukneeq.com/technology/tutorial-foundation-for-apps-setup-with-angularjs-best-practices/)

This project is an application skeleton for a typical [Foundation App](http://foundation.zurb.com/apps/) that utilizes [AngularJS](http://angularjs.org/).
You can use it to quickly bootstrap your foundation/angular webapp projects and dev environment for these projects.

The seed contains a sample application and is preconfigured to install the AngularJS and Foundation for Apps frameworks as well as a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together. I have also started a [tutorial for foundation for apps](http://fedil.ukneeq.com/technology/tutorial-foundation-for-apps-setup-with-angularjs-best-practices/). Feel free to check it out.

## Community Awesomeness and Credit
The open source community is awesome and there are tons of great code out there. This helps to not have to re-create the wheel everytime. With that in mind, I used the [Angular Seed Project](https://github.com/angular/angular-seed) as inspiration for this. So the sample app will be close to identical except with foundation for apps worked in.

I also used the [Foundation for Apps Template](https://github.com/zurb/foundation-apps-template) as a base for the setup of foundation in this project. 

## Getting Started

To get you started you can simply clone the foundation-apps-seed repository and install the dependencies:

### Prerequisites

You need git to clone the foundation-apps-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test foundation-apps-seed. You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone foundation-apps-seed

Clone the foundation-apps-seed repository using [git][git]:

```
git clone https://github.com/ukneeq/foundation-apps-seed.git
cd foundation-apps-seed
```

If you just want to start a new project without the foundation-apps-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/ukneeq/foundation-apps-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `src/app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but foundation-apps-seed changes this location through the `.bowerrc` file.  Putting it in the src/app folder makes it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start this server is:

```
npm start
```

Now browse to the app at `http://localhost:8080`.



## Directory Layout

For the directory structure I wanted to be sure to follow [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub).

```
src/
  app/                    --> all of the source files for the application
    app.css               --> default stylesheet
    components/           --> all app specific modules
      version/              --> version related components
        version.js                 --> version module declaration and basic "version" value service
        version_test.js            --> "version" value service tests
        version-directive.js       --> custom directive that returns the current app version
        version-directive_test.js  --> version directive tests
        interpolate-filter.js      --> custom interpolation filter
        interpolate-filter_test.js --> interpolate filter tests
    view1/                --> the view1 view template and logic
      view1.html            --> the partial template
      view1.js              --> the controller logic
      view1_test.js         --> tests of the controller
    view2/                --> the view2 view template and logic
      view2.html            --> the partial template
      view2.js              --> the controller logic
      view2_test.js         --> tests of the controller
    app.js                --> main application module
    index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## TODO

* Need to write out the unit and e2e-tests and make sure everything is included to perform the tests. 
* Provide more foundation base examples

## Resources

For more information on AngularJS please check out http://angularjs.org/

Other resource information can be found at the following: 

* [Foundation for Apps][foundation-apps]
* [git][git]
* [bower][bower]
* [npm][npm]
* [node][node]
* [protractor][protractor]
* [jasmine][jasmine]
* [karma][karma]
* [http-server][http-server]

[foundation-apps]: http://foundation.zurb.com/apps/
[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
