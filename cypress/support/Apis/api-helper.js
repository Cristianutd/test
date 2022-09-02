import { getRandomIntBetween } from "../CustomHelpers/general-helper";
import API from "../ApiUrls";

Cypress.Commands.add(
  "verifyResponseStatusCode",
  { prevSubject: true },
  (subject, statusCode) => {
    let status = subject.hasOwnProperty("response")
      ? subject.response.statusCode
      : subject.status;
    expect(status).eql(statusCode);
  }
);

export function getApiByName(name) {
  let api = Object.entries(API).find((x) => x[0] === name);
  return api[1];
}

export function generateRandomID(min, max) {
  return getRandomIntBetween(min, max);
}
