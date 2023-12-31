import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY';
const TRANDING = 'trending/all/day';
const DETAILS = 'movie/';
const params = {
  language: 'en-US',
  include_adult: false,
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export async function fetchTrending(signal) {
  const response = await axios.get(TRANDING, {
    params,
    signal,
  });
  return response.data.results;
}

export async function fetchDetails(id, signal) {
  const response = await axios.get(DETAILS + `${id}`, {
    params,
    signal,
  });
  return response.data;
}

export async function fetchCredits(id, signal) {
  const response = await axios.get(DETAILS + `${id}/credits`, {
    params,
    signal,
  });
  return response.data;
}

export async function fetchReviews(id, signal) {
  const response = await axios.get(DETAILS + `${id}/reviews`, {
    params,
    signal,
  });
  return response.data;
}

export async function fetchByQuery(queryParams, signal) {
  const response = await axios.get(`search/movie?query=${queryParams}`, {
    params,
    signal,
  });
  return response.data;
}
