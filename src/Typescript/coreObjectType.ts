type Cost = number | string;
type Task = { assignee:string, dateSt:Date, progress:number};

const task:Task = {
   assignee:'yassine',
   dateSt:new Date(),
   progress:55 
}

function createTask (name:string, progress:number):Task {
   let t1: Task = {assignee:name,dateSt:new Date(), progress:progress}
   return t1
}

function renderTask(task:Task):void {
   console.log(`On ${task.dateSt.toDateString()} for ${task.assignee} at progress ${task.progress}`)
}

renderTask(createTask('sandra',44))

let updateTask :(name:string)=>Task;

