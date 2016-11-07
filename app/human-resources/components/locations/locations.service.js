"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var url_1 = require("../../../url");
var LocationsService = (function () {
    function LocationsService(http, url) {
        this.http = http;
        this.url = url;
    }
    LocationsService.prototype.getAllEntity = function () {
        this.getLocations();
        return this.locations;
    };
    LocationsService.prototype.getEntityById = function (id) {
        return this.getLocation(id);
    };
    LocationsService.prototype.getLocations = function () {
        return this.http.get(this.url.getURL() + 'locations')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // getLocations() {
    //     this.http
    //       .get(this.url.getURL() + 'locations')
    //       .map(res => <Locations[]> res.json())
    //       .subscribe(data => this.locations = data);
    // }
    LocationsService.prototype.getLocation = function (id) {
        return this.http
            .get(this.url.getURL() + 'location' + '/' + id)
            .map(function (res) { return res.json(); });
    };
    LocationsService.prototype.create = function (location) {
        var body = JSON.stringify(location);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'location/add', body, options)
            .map(function (res) { return res.json(); });
    };
    LocationsService.prototype.update = function (location) {
        var body = JSON.stringify(location);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'location/update', body, options)
            .map(function (res) { return res.json(); });
    };
    LocationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LocationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, url_1.Url])
    ], LocationsService);
    return LocationsService;
}());
exports.LocationsService = LocationsService;
//# sourceMappingURL=locations.service.js.map