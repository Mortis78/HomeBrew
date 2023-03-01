export const cleanBeerData =  beers => {
    return  {
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      beer_image: beer['image_url']
}
}
