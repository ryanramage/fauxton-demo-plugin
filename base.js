define([
  "../fauxton/js/app",
  "../fauxton/js/api",
  "text!./templates/example.html"
],

function(app, FauxtonAPI) {

  var Demo = FauxtonAPI.addon();

  Demo.initialize = function() {
    console.log("HELLO FROM DEMO LAND!!!!");

    FauxtonAPI.addHeaderLink({title: "demo", href: "#demo"});
  };

  Demo.Views.Example = FauxtonAPI.View.extend({
    template: "../../fauxton-demo-plugin/templates/example"
  });

  Demo.Routes = {
    "demo" : function() {
      return {
        layout: "one_pane",

        data: {},

        crumbs: [
          {"name": "Dashboard", "link": app.root},
          {"name": "Demo", "link": "demo"}
        ],

        views: {
          "#dashboard-content": new Demo.Views.Example()
        }
      };
    }
  };

  return Demo;
});
