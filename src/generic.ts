
const names:Array<string> = ['yass', 'ali']

const pause : Promise<string> = new Promise((resolve, rej)=>{
   setTimeout(()=>resolve('test late'),2000)
})

pause.then(resp=>console.log(resp.toUpperCase()))

function merge<T extends object, U extends object> (objA:T,objB:U) {
   return {...objA,...objB}

}

const data1 = merge({name:'text'},{age:44})

console.log(data1)

function describeTask<T extends TaskAgile> (elem:T):void{
   console.log('\x1b[35m%s\x1b[0m', `From ${elem.assignee} as side note ${elem.notes}`);
}

describeTask({assignee:'yass',priority:'low',progress:33})

function extractAndConvert<T extends object, U extends keyof T> (obj:T,key:U){
   return obj[key]
}
