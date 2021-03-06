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
var JobsService = (function () {
    function JobsService(http, url) {
        this.http = http;
        this.url = url;
    }
    JobsService.prototype.getJobs = function () {
        return this.http.get(this.url.getURL() + 'jobs')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    JobsService.prototype.getJob = function (id) {
        return this.http
            .get(this.url.getURL() + 'job' + '/' + id)
            .map(function (res) { return res.json(); });
    };
    JobsService.prototype.create = function (job) {
        var body = JSON.stringify(job);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'job/add', body, options)
            .map(function (res) { return res.json(); });
    };
    JobsService.prototype.update = function (job) {
        var body = JSON.stringify(job);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'job/update', body, options)
            .map(function (res) { return res.json(); });
    };
    JobsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    JobsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, url_1.Url])
    ], JobsService);
    return JobsService;
}());
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map