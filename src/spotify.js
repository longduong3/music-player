import axios from "axios";
const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "415f6011a6464968be1c0dd429b26da2";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-library-read",
  "playlist-read-private",
  "user-read-currently-playing",
  "user-top-read",
  "user-follow-read",
  "user-read-private",
];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
