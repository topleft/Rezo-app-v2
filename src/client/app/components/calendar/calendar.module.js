angular.module('app.components.calendar', ["ngMaterial", "ngSanitize"]);

angular.module("app.components.calendar").constant("config", {
    version: "0.2.12",
    debug: document.domain.indexOf("localhost") > -1
});