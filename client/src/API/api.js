import axios from "axios";

export default axios.create({
    baseURL: "http://chambeando-env.eba-fe32cpvg.us-east-2.elasticbeanstalk.com/api/v1"
})