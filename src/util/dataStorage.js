const moment = require('moment')

let dbData = [{
    id: 'link-1',
    name: 'Ajeet Sandu',
    email: 'a.sandu@student.fontys.nl',
    age: 23,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a')
},{
    id: 'link-2',
    name: 'Patrick Richter',
    email: 'p.richter@student.fontys.nl',
    age: 26,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a')
}]


module.exports = {
    dbData: dbData
};