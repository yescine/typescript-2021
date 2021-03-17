"use strict";
function generateError(msg, code) {
    throw { msg, code };
}
const result = generateError('no data', 501);
console.log(result);
