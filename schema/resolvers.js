const { UserList } = require("../fakeData/fakeData");


const resolvers = {
    Query : {
        users(){

            return UserList
        }
    }
}

module.exports = resolvers;