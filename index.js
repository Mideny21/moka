const axios = require("axios");
const Bugsnag = require("./modules/bugsnag");
const urlsToFetch = require("./data/urls");

const fetchInterval = 120000;

const fetchUrls = async (url) => {
  axios.get(url).catch((error) => {
    Bugsnag.handle(url, error);
  });
  setTimeout(() => {
    fetchUrls(url);
  }, fetchInterval);
};

urlsToFetch.forEach((url) => fetchUrls(url));

console.log("Monitoring urls started!");

console.log(
  `${urlsToFetch.length} urls will be fetched every ${fetchInterval} milliseconds.`
);
