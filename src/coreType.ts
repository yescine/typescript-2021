enum Rules {dashboard=1, calendar='calendar', kanban=200}

const data:{
   q:number,
   st:string,
   holiday:string[],
   role:[number, string],
   rules: any,
   // options:any{}

} = {
   q:1, 
   st:'test', 
   holiday:[''],
   role:[2, 'author'],
   rules:Rules.calendar
}
const days:string[] = ['mon', 'tue', 'wed ']
const q1 = 'test'

type Msg = 'out= ' | 'res= ';

function add (num1:number, num2:number, showRes:boolean=false, msg:Msg = 'res= ') {
   let calculation = num1+num2
   if(showRes) console.log(msg,calculation)
   return calculation
}
function calc (num1:number, num2:number, option) {
   if(option.power) return Math.pow(num1,num2)

}


console.log(add(data.q,3))

data.holiday = days
console.log({data})