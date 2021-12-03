import axios from "axios";

export default axios.create({
    baseURL: "https://www.chambeando.pe/api/v1"
})