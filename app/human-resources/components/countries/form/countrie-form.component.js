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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var countries_1 = require("../countries");
var http_1 = require("@angular/http");
var url_1 = require("../../../../url");
var router_1 = require("@angular/router");
var countries_service_1 = require("../countries.service");
var CountrieFormComponent = (function () {
    function CountrieFormComponent(countriesService, router, activatedRoute, url, http, formBuilder) {
        this.countriesService = countriesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.http = http;
        this.formBuilder = formBuilder;
    }
    CountrieFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.createOrUpdateFormInit();
    };
    CountrieFormComponent.prototype.initForm = function () {
        this.registerForm = this.formBuilder.group({
            country_id: '',
            country_name: '',
            region_id: ''
        });
    };
    CountrieFormComponent.prototype.initEntity = function (countrie) {
        this.countrie.country_name = countrie.country_name;
        this.countrie.region_id = countrie.region_id;
    };
    CountrieFormComponent.prototype.save = function (countrie) {
        this.initEntity(countrie);
    };
    CountrieFormComponent.prototype.create = function () {
        this.countriesService
            .create(this.countrie)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    CountrieFormComponent.prototype.update = function () {
        this.countriesService
            .update(this.countrie)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    CountrieFormComponent.prototype.refresh = function () {
        this.http
            .get(this.url.getURL() + 'countries')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); });
        this.router.navigate(['/countries']);
    };
    CountrieFormComponent.prototype.createOrUpdateFormInit = function () {
        var _this = this;
        var id = this.url.getParameter('id', this.activatedRoute);
        if (id === undefined || id === null) {
            this.countrie = new countries_1.Countries();
            this.isCreate = true;
        }
        else {
            this.isUpdate = true;
            this.countriesService
                .getCountrie(id)
                .subscribe(function (data) { return _this.countrie = data[0]; });
        }
    };
    CountrieFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'countrie-form',
            templateUrl: 'countrie-form.component.html'
        }), 
        __metadata('design:paramtypes', [countries_service_1.CountriesService, router_1.Router, router_1.ActivatedRoute, url_1.Url, http_1.Http, forms_1.FormBuilder])
    ], CountrieFormComponent);
    return CountrieFormComponent;
}());
exports.CountrieFormComponent = CountrieFormComponent;
//# sourceMappingURL=countrie-form.component.js.map