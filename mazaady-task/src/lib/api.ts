import axios from "axios";

export const mazaadyApiClient = axios.create({
  baseURL: "https://stagingapi.mazaady.com/api/v1/",
  headers: {
    "Accept-Language": "*",
    'Content-Type': 'application/json',
    'Accept': '/',

  }
});

