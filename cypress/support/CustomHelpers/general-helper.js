require("format-unicorn");

export function formatString(initialString, args) {
  return initialString.formatUnicorn(args);
}

export function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
