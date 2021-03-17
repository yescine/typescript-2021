"use strict";
var Rules;
(function (Rules) {
    Rules[Rules["dashboard"] = 1] = "dashboard";
    Rules["calendar"] = "calendar";
    Rules[Rules["kanban"] = 200] = "kanban";
})(Rules || (Rules = {}));
const data = {
    q: 1,
    st: 'test',
    holiday: [''],
    role: [2, 'author'],
    rules: Rules.calendar
};
const days = ['mon', 'tue', 'wed '];
const q1 = 'test';
function add(num1, num2, showRes = false, msg = 'res= ') {
    let calculation = num1 + num2;
    if (showRes)
        console.log(msg, calculation);
    return calculation;
}
function calc(num1, num2, option) {
    if (option.power)
        return Math.pow(num1, num2);
}
console.log(add(data.q, 3));
data.holiday = days;
console.log({ data });
