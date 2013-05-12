fauxton-demo-plugin
===================

Demo plugin showing proof of concept loading external repos.

More to come.

Getting started
----------------

Clone this repo into your couchdb src directory, eg


```
cd couchdb/src
git clone https://github.com/ryanramage/fauxton-demo-plugin

```

so you should now have `couchdb/src/fauxton-demo-plugin`.

Add a symbolic link to your running couchdb instance:

    ln -s couchdb/src/fauxton-demo-plugin /Applications/Apache\ CouchDB.app/Contents/Resources/couchdbx-core/share/couchdb/www/fauxton-demo-plugin

Add this pluging to fauxtons addon.js file, like so

```
define([
        "js/addons/config/base",
        "js/addons/logs/base",
        "js/addons/stats/base",
        "js/addons/contribute/base"
        ,"../fauxton-demo-plugin/base"
], function() {
  return {
    addons: arguments
  };
});
```

run `./rebuild` in the fauxton directory to set to develop mode, and './rebuild compile' to minify to one requirejs file, which will include this plugin


