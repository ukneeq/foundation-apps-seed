# foundation-apps-seed — Seed for Apps using Foundation for Apps w/Angularjs
This project is an application skeleton for a typical [Foundation App](http://foundation.zurb.com/apps/) that utilizes [AngularJS](http://angularjs.org/).
You can use it to quickly bootstrap your foundation/angular webapp projects and dev environment for these projects.

The seed contains a sample application and is preconfigured to install the AngularJS and Foundation for Apps frameworks as well as a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.

## Community Awesomeness and Credit
The open source community is awesome and there are tons of great code out there. This helps to not have to re-create the wheel everytime. With that in mind, I used the [Angular Seed Project](https://github.com/angular/angular-seed) as inspiration for this. So the sample app will be close to identical except with foundation for apps worked in.

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
