import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/movies";

export  function getMovies() {
    return axios.get(baseURL)
}