import axios from "axios";

export const mazaadyApiClient = axios.create({
  baseURL: "https://stagingapi.mazaady.com/api/v1/",
  headers: {
    "Accept-Language": "*",
    'Content-Type': 'application/json',
    'Accept': '/',
    "content-language": "en",
    "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
    "currency": "AED",
    "platform": "Postman"
  }
});
