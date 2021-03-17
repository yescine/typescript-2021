"use strict";
class ProjectManagement {
    constructor(task, id, project) {
        this.id = id;
        this.kpi = { total: 0, firstDate: new Date() };
        this.task = task;
        this.id = +(Math.random() * 10).toFixed(2);
        this.collaborators = project.collaborators;
    }
    create() {
    }
}
const project = new ProjectManagement({ assignee: 'yass', progress: 55, priority: "normal" }, 1, { collaborators: [], owner: 'test', title: 'proj' });
let nullish = project !== null && project !== void 0 ? project : 'default';
console.log(project);
