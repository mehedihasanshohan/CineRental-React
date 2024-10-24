const data =[
  {
    "id": crypto.randomUUID(),
    "cover": "/avatar.png",
    "title": "iron man",
    "description" : "adventure movie",
    "genre" : "comedy/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/iron-man.png",
    "title": "Spider man",
    "description" : "adventure movie",
    "genre" : "comedy/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/marriage-strory.jpg",
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
    "cover": "/parasite.jpg",
    "title": "Spider man",
    "description" : "adventure movie",
    "genre" : "comedy/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/pain-and-gain.jpg",
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