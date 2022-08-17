const fetchBooks = async (filter = '', signal = null) => {
  const response = await fetch(`https://crossorig.in/https://querifier-demo.herokuapp.com/v1/books?filter[where][title]=${filter}`)

  return response.json();
}

export { fetchBooks }