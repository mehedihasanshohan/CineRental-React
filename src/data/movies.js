const data =[
  {
    "id": crypto.randomUUID(),
    "cover": "/avatar.png",
    "title": "Avatar",
    "description" : "adventure movie",
    "genre" : "adventure/Drama",
    "rating": 3,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/iron-man.png",
    "title": "Iron man",
    "description" : "action movie",
    "genre" : "action/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/marriage-strory.jpg",
    "title": "Marriage Story",
    "description" : "romantic movie",
    "genre" : "comedy/Romance",
    "rating": 4,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/once-in-ho.jpg",
    "title": "Hollywood",
    "description" : "action movie",
    "genre" : "action/thrill",
    "rating": 2,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/parasite.jpg",
    "title": "Parasite",
    "description" : "thrilll movie",
    "genre" : "comedy/thrill",
    "rating": 4,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/pain-and-gain.jpg",
    "title": "Pain and Gain",
    "description" : "comedy movie",
    "genre" : "comedy/Drama",
    "rating": 3,
    "price": 140
  },
]

function getAllMovies(){
  return data;
}
export {getAllMovies};