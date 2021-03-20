import {ProjectManagement, ProjectTemplate, TaskAgile} from './Interface.js'

const task1:TaskAgile = {assignee:'yassine', progress:55,priority:"normal"}
const project1:ProjectTemplate = {collaborators:[],owner:'test',title:'ERP-TN',type:'waterfall'}

const project = new ProjectManagement(task1,1,project1)
let nullish = project ?? 'default'

console.log(project)
