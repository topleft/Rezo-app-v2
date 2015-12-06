
(function() {
    'use strict';

    angular.module("app.components.space-selection")
        .directive("spaceSelection", spaceSelectionDirective);

    function spaceSelectionDirective() {
        return {
            restrict: 'E', 
            templateUrl: 'src/client/app/components/space-selection/space-selection.html',
            scope: {},
            controller: spaceSelectionController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    spaceSelectionController.$inject = [ 'dataservice', 'app.core' ];

    function spaceSelectionController(dataservice, frontEndDataService) {
        var vm = this;



    }

})();

