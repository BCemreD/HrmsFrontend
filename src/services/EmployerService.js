import axios from "axios"

let baseUrl = "http://localhost:8080/api/";
export default class EmployerService{
    registerEmployer(employer) {
        let result = axios.post(baseUrl + "employers/register", employer);
        return result;
    }
}