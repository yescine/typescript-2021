// import {Logger} from './decorator'
type priorityType = 'high' | 'low' | 'normal'

interface TaskAgile {
   source?:string
   assignee:string,
   progress:number,
   priority: priorityType,
   notes?:string
}

interface ProjectTemplate {
   title:string,
   owner:string,
   collaborators:string[]
}

// @Logger('111')
// @WithTemplate('<h1> some Deco</h1>','app')
class ProjectManagement implements ProjectTemplate {
   public task:TaskAgile
   public title
   owner
   collaborators
   private kpi:{total: number, firstDate:Date} = {total:0, firstDate:new Date()}


   constructor(task:TaskAgile,private readonly id:number, project:ProjectTemplate) {
      this.task = task
      this.id = +(Math.random()*10).toFixed(2)
      this.collaborators = project.collaborators
   }

   // @LogKPI
   createKPI() {
      console.log('creating project KPI')
   }

}

const project = new ProjectManagement({assignee:'yass', progress:55,priority:"normal"},1,{collaborators:[],owner:'test',title:'proj'})
let nullish = project ?? 'default'
console.log(project)