const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchBooks = async (filter = '', signal = null) => {
  const response = await fetch(`${API_URL}?filter[where][title]=${filter}`)

  return response.json();
}

export { fetchBooks }