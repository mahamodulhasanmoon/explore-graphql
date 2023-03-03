const { UserList, MovieList } = require("../fakeData/fakeData");
const _ = require('lodash')


const resolvers = {
    Query : {
        users: () =>{

            return UserList
        },
        user: (parent, args)=>{

          const id =   args.id

          const user = _.find(UserList, {id : Number(id)})
          return user
        },
        movies : ()=>{
            return MovieList
        },

        movie : (parent, args)=>{
            const id = args.id
            const movie = _.find(MovieList, {id : Number(id)})
            return movie
        },

    }
}

module.exports = resolvers;