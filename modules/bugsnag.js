const { createClient } = require("@bugsnag/js");
const credentials = require("../credentials.json");
const acceptStatuses = require("../data/accept.json");
const util = require("util");

const bugsnagClient = createClient(credentials.bugsnag.key);

class Bugsnag {
  static async handle(url, error) {
    const status = error.response.status;
    if (!acceptStatuses[url] || !acceptStatuses[url].includes(status)) {
      bugsnagClient.notify(new Error(util.inspector(error)));
      console.error(`A status of ${status} have been returned by ${url}`);
    }
  }
}

module.exports = Bugsnag;
