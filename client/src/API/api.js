import axios from "axios";

export default axios.create({
    baseURL: "Chambeando-env.eba-fe32cpvg.us-east-2.elasticbeanstalk.com/api/v1/"
})