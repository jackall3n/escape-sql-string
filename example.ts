import escapeString from './';

const sqlString = "Sup'er"

console.log(escapeString(sqlString)) // => Sup''er
