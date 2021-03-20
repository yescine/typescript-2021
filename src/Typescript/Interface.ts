import * as Deco from './decorator.js'

type priorityType = 'high' | 'low' | 'normal'

export interface TaskAgile {
   source?:string
   assignee:string,
   progress:number,
   priority: priorityType,
   notes?:string
}

type projectType = 'agile'|'waterfall'|'study'
export interface ProjectTemplate {
   title:string,
   owner:string,
   collaborators:string[],
   type:projectType
}

@Deco.Logger('initializing project') @Deco.WithTemplate('<h1>Some Decoration project</h1>','app')
export class ProjectManagement implements ProjectTemplate {
   public task:TaskAgile[]
   public title
   owner
   collaborators
   type
   private kpi:{total: number, firstDate:Date} = {total:0, firstDate:new Date()}


   constructor(task:TaskAgile,private readonly id:number, project:ProjectTemplate) {
      this.task=[]
      this.task.push(task)
      this.id = +(Math.random()*10).toFixed(2)
      this.collaborators = project.collaborators
      this.type = project.type
      this.owner = project.owner
   }

   // @LogKPI
   addTask(task:TaskAgile):void {
      this.task.push(task)
   }
   createKPI() {
      console.log('creating project KPI')
   }

}

// const project = new ProjectManagement({assignee:'yass', progress:55,priority:"normal"},1,{collaborators:[],owner:'test',title:'proj'})
// let nullish = project ?? 'default'
// console.log(project)

