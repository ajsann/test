const moment = require('moment')

// Example Data
let userData = [{
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
},{
    id: 'link-3',
    name: 'James Brown',
    email: 'j.brown@student.mail.nl',
    age: 21,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a')
},{
    id: 'link-4',
    name: 'Linda Stiller',
    email: 'l.stiller@student.mail.nl',
    age: 19,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a')
},{
    id: 'link-5',
    name: 'Jerry Callas',
    email: 'j.callas@student.fontys.nl',
    age: 28,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a')
}]

// Counter for new IDs (Always +1 from userData.size)
let idCount = 6

// Resolver Function
const resolvers = {
    Query: {
        info: () => `This is the API for ESD`,
        users: ()=> userData,
        getUser: (root, args) => {
            return userData.find(user => user.id === args.id)
        }
    },
    Mutation: {
        // 2
        createUser: (root, args) => {
            const user = {
                id: `link-${idCount++}`,
                name: args.name,
                email: args.email,
                age: args.age,
                accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
            }
            userData.push(user)
            return user
        }
    },
}

// Module export for Index.js
module.exports = {
    resolvers: resolvers
};