const cleanBeerData =  beer => {
    return  {
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      beerImage: beer['image_url']
    }
}

export default cleanBeerData
