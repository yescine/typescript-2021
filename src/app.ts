import {ProjectManagement, ProjectTemplate, TaskAgile} from './Typescript/Interface.js'

const task1:TaskAgile = {assignee:'yassine', progress:55,priority:"normal"}
const template:ProjectTemplate = {collaborators:[],owner:'yassine',title:'ERP-TN',type:'waterfall'}

const project = new ProjectManagement(task1,1,template)
project.addTask({assignee:'ala',priority:'high',progress:22})
let nullish = project ?? 'default'

console.log('data',project);
