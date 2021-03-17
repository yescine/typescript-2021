// unknown type
// let userInput:unknown
// let userName:string

// userInput='yas'
// userName = userInput

function generateError(msg: string, code: number):never{
   throw {msg,code}
}

const result = generateError('no data', 501)
console.log(result);