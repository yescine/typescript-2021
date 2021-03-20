var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as Deco from './decorator.js';
let ProjectManagement = class ProjectManagement {
    constructor(task, id, project) {
        this.id = id;
        this.kpi = { total: 0, firstDate: new Date() };
        this.task = task;
        this.id = +(Math.random() * 10).toFixed(2);
        this.collaborators = project.collaborators;
        this.type = project.type;
        this.owner = project.owner;
    }
    createKPI() {
        console.log('creating project KPI');
    }
};
ProjectManagement = __decorate([
    Deco.Logger('initializing project'),
    Deco.WithTemplate('<h1>Some Decoration project</h1>', 'app')
], ProjectManagement);
export { ProjectManagement };
