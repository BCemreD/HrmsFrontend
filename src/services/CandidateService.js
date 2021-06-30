  
import axios from "axios"

export default class CandidateService{
    getCandidatess(){
        return axios.get("http://localhost:8080/api/candidatess/getall")
    }
}