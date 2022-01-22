import axios from "axios";

const instance = axios.create({
    /* Połączenie z aplikacją serwerową na odpowiednim adresie oraz uwierzytelnienie za pomocą magazynu sieciowego */
    baseURL: "http://127.0.0.1:8000/",
    headers: { Authorization: localStorage.getItem("bearer") },
});

export default instance;
