const data =[
  {
    "id": crypto.randomUUID(),
    "cover": "/assets/movie-covers/once-in-ho.jpg",
    "title": "iron man",
    "description" : "adventure movie",
    "genre" : "comedy/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/once-in-ho.jpg",
    "title": "Spider man",
    "description" : "adventure movie",
    "genre" : "comedy/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/once-in-ho.jpg",
    "title": "Spider man",
    "description" : "adventure movie",
    "genre" : "comedy/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/once-in-ho.jpg",
    "title": "Spider man",
    "description" : "adventure movie",
    "genre" : "comedy/Drama",
    "rating": 5,
    "price": 140
  },
]

function getAllMovies(){
  return data;
}
export {getAllMovies};