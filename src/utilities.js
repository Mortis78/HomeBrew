const cleanBeerData =  beer => {
    return  {
      id: beer.id,
      abv: beer.abv,
      name: beer.name,
      tagline: beer.tagline,
      foodPairing: beer.food_pairing,
      description: beer.description,
      beerImage: beer['image_url']
    }
}

export default cleanBeerData
