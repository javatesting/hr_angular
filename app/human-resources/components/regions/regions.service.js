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
require('rxjs/Rx');
var RegionsService = (function () {
    function RegionsService(http, url) {
        this.http = http;
        this.url = url;
        this.debug = '?XDEBUG_SESSION_START=15603';
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Access-Control-Allow-Origin', '*');
        // this.headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8' );
    }
    RegionsService.prototype.getRegions = function () {
        return this.http.get(this.url.getURL() + 'regions')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegionsService.prototype.getRegion = function (id) {
        return this.http
            .get(this.url.getURL() + 'region' + '/' + id)
            .map(function (res) { return res.json(); });
    };
    RegionsService.prototype.create = function (region) {
        var body = JSON.stringify(region);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'region/add' + this.debug, body, options)
            .map(function (res) { return res.json(); });
    };
    RegionsService.prototype.update = function (region) {
        var body = JSON.stringify(region);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'region/update' + this.debug, body, options)
            .map(function (res) { return res.json(); });
    };
    RegionsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    RegionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, url_1.Url])
    ], RegionsService);
    return RegionsService;
}());
exports.RegionsService = RegionsService;
//# sourceMappingURL=regions.service.js.map