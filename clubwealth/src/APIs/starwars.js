import axios from "axios";

const starwars = {
  getPeople: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getNextPeople: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getFilms: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/films");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
  getPlanet: async (url) => {
    try {
      const response = await axios.get(`${url}`);
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
  getStarships: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
};

export default starwars;
