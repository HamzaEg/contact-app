import axios from 'axios';

export default axios.create({
    // server-api with "contacts" resource as Array is requird!
    baseURL:"http://localhost:3030/",
})