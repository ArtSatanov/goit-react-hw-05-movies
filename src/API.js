import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY';
const TRANDING = 'trending/all/day';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export async function fetchTrending() {
  const response = await axios.get(TRANDING);
  console.log(response.data);
}
