import axios from "axios";

export default axios.create({
    baseURL: "https://chambeando.pe/api/v1"
})