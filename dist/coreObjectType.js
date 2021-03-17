"use strict";
const task = {
    assignee: 'yassine',
    dateSt: new Date(),
    progress: 55
};
function createTask(name, progress) {
    let t1 = { assignee: name, dateSt: new Date(), progress: progress };
    return t1;
}
function renderTask(task) {
    console.log(`On ${task.dateSt.toDateString()} for ${task.assignee} at progress ${task.progress}`);
}
renderTask(createTask('sandra', 44));
let updateTask;
