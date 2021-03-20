function Logger(data:string) {
   return function (constructor:Function){
      console.log('\x1b[36m%s\x1b[0m', 'logging...' + data);
   }
}

function WithTemplate(template:string, hookId:string){
   return (_:Function)=>{
      const hookEl = document.getElementById(hookId);
      if(hookEl){
         hookEl.innerHTML = template
      }
   }
}

function LogKPI (target:any, name:string |symbol, descriptor:PropertyDescriptor){
   console.log(target, name, descriptor)
}
