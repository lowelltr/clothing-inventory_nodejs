"use strict"
const accessories = {
    template: `
    <button ng-click="$ctrl.getAccessories();">Get Accessories</button>
    <form ng-submit="$ctrl.postAccessory($ctrl.newAccess);">
      <input type="text" ng-model="$ctrl.newAccess.type" placeholder="Type">
      <input type="text" ng-model="$ctrl.newAccess.size" placeholder="Size">
      <input type="text" ng-model="$ctrl.newAccess.price" placeholder="Price">
      <button>Add Accessory</button>
    </form>
    <p ng-repeat="accessory in $ctrl.accessoriesList track by $index">{{ accessory }}
      <button ng-click="$ctrl.deleteAccessory(accessory.id);">X</button>
      <button ng-click="$ctrl.updateAccessory($ctrl.accessoriesList[$index].id, $ctrl.newAccess);">Edit</button>
    </p>
    `,

    controller: function($http) {
        const vm = this;
        vm.getAccessories = () => {
            $http({
                url: "/api/shop/accessories",
                method: "GET"
            }).then((response) => {
                vm.accessoriesList = response.data;
            });
        };
        vm.deleteAccessory = (index) => {
            $http({
                url: "/api/shop/accessories/" + index,
                method: "DELETE"
            }).then((response) => {
                vm.accessoriesList = response.data;
            });
        };

        vm.updateAccessory = (index, newAccess) => {
            $http({
                url: "/api/shop/accessories/" + index,
                method: "PUT",
                data: newAccess
            }).then((response) => {
                vm.accessoriesList = response.data;
            });
        };
        vm.postAccessory = (newAccess) => {
            $http({
                url: "/api/shop/accessories/",
                method: "POST",
                data: newAccess
            }).then((response) => {
                vm.accessoriesList = response.data;
            });
        };
    }


}

angular.module("App").component("accessories", accessories);