import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com/"
});
//http://www.omdbapi.com/?i=tt3896198&apikey=b424dfd6
// "https://jsonplaceholder.typicode.com"
