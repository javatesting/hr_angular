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
var router_1 = require("@angular/router");
var person_service_1 = require("../person.service");
var url_1 = require("../../../../url");
var PersonDetailComponent = (function () {
    function PersonDetailComponent(activatedRoute, personservice, url) {
        this.activatedRoute = activatedRoute;
        this.personservice = personservice;
        this.url = url;
        this.linkTo = '/person/edit/form';
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.url.getParameter('person_id', this.activatedRoute);
        this.personservice.getPerson(id).subscribe(function (data) { return _this.person = data[0]; });
    };
    PersonDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-detail',
            templateUrl: 'person-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, person_service_1.PersonService, url_1.Url])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map