let BASE_URL = "";
const TIME_OUT = 10000;
const DEAFULT_LOADING = false;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://BASE_URL/prod";
} else {
  BASE_URL = "http://BASE_URL/test";
}

export { BASE_URL, TIME_OUT, DEAFULT_LOADING };