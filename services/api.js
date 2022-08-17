const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchBooks = async (filter = '', signal = null) => {
  const response = await fetch(`${API_URL}/books?filter[where][title]=${filter}`)

  return response.json();
}

const fetchBook = async (id) => {
  const response = await fetch(`${API_URL}/books/${id}`)

  return response.json();
}


export { fetchBooks, fetchBook }