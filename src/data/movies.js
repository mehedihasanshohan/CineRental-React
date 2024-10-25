const data =[
  {
    "id": crypto.randomUUID(),
    "cover": "/avatar.png",
    "title": "Avatar",
    "description" : "Avatar is a visually stunning sci-fi film set on the lush, alien world of Pandora, where a paraplegic ex-Marine, Jake Sully, inhabits an avatar body to interact with the planet's indigenous Na'vi people. As he grows closer to them, he faces a choice between his military mission and protecting Pandora's ecosystem.",
    "genre" : "adventure/Drama",
    "rating": 3,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/iron-man.png",
    "title": "Iron man",
    "description" : "Avatar is a visually stunning sci-fi film set on the lush, alien world of Pandora, where a paraplegic ex-Marine, Jake Sully, inhabits an avatar body to interact with the planet's indigenous Na'vi people. As he grows closer to them, he faces a choice between his military mission and protecting Pandora's ecosystem.",
    "genre" : "action/Drama",
    "rating": 5,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/marriage-strory.jpg",
    "title": "Marriage Story",
    "description" : "Avatar is a visually stunning sci-fi film set on the lush, alien world of Pandora, where a paraplegic ex-Marine, Jake Sully, inhabits an avatar body to interact with the planet's indigenous Na'vi people. As he grows closer to them, he faces a choice between his military mission and protecting Pandora's ecosystem.",
    "genre" : "comedy/Romance",
    "rating": 4,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/once-in-ho.jpg",
    "title": "Hollywood",
    "description" : "Avatar is a visually stunning sci-fi film set on the lush, alien world of Pandora, where a paraplegic ex-Marine, Jake Sully, inhabits an avatar body to interact with the planet's indigenous Na'vi people. As he grows closer to them, he faces a choice between his military mission and protecting Pandora's ecosystem.",
    "genre" : "action/thrill",
    "rating": 2,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/parasite.jpg",
    "title": "Parasite",
    "description" : "Avatar is a visually stunning sci-fi film set on the lush, alien world of Pandora, where a paraplegic ex-Marine, Jake Sully, inhabits an avatar body to interact with the planet's indigenous Na'vi people. As he grows closer to them, he faces a choice between his military mission and protecting Pandora's ecosystem.",
    "genre" : "comedy/thrill",
    "rating": 4,
    "price": 140
  },
  {
    "id": crypto.randomUUID(),
    "cover": "/pain-and-gain.jpg",
    "title": "Pain and Gain",
    "description" : "Avatar is a visually stunning sci-fi film set on the lush, alien world of Pandora, where a paraplegic ex-Marine, Jake Sully, inhabits an avatar body to interact with the planet's indigenous Na'vi people. As he grows closer to them, he faces a choice between his military mission and protecting Pandora's ecosystem.",
    "genre" : "comedy/Drama",
    "rating": 3,
    "price": 140
  },
]

function getAllMovies(){
  return data;
}
export {getAllMovies};