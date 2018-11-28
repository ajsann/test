const {GraphQLServer} = require('graphql-yoga')
const moment = require('moment')

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
}]

let idCount = 3
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

// 3
const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
