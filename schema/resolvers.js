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
            const name = args.name
        
            const movie = _.find(MovieList, {name })
            return movie
        },

    },
    User: {
        favoriteMovies: () => {
           
          return _.filter(
            MovieList,
            (movie) =>
              movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
          );
        },
      },

      Mutation :{

      createUser:(parent, args)=>{

        const user = args.input
        console.log(user)
      }

    }


    
}

module.exports = resolvers;