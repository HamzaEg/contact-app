import axios from 'axios';

export default axios.create({
    // server-api with an empty Array of "contacts", should be available!
    // baseURL:"http://localhost:3030/",
    baseURL:"https://jsonplaceholder.typicode.com/",

})