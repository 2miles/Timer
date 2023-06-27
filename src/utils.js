/**
 * Takes an interval of milliseconds and returns a string representing the
 * milliseconds component as a stopwatch would display it.
 */
export function displayMillis(interval) {
  let seconds = interval % 100;
  if (seconds >= 10) return seconds.toString();
  else return `${0}${seconds.toString()}`;
}

/**
 * Takes an interval of milliseconds and returns a string representing the
 * seconds component as a stopwatch would display it.
 */
export function displaySeconds(interval) {
  let seconds = Math.floor(interval / 100) % 60;
  if (seconds >= 10) return seconds.toString();
  else return `${0}${seconds.toString()}`;
}

/**
 * Takes an interval of milliseconds and returns a string representing the
 * minutes component as a stopwatch would display it.
 */
export function displayMinutes(interval) {
  let minutes = Math.floor(interval / 100 / 60) % 60;
  if (minutes >= 10) return minutes.toString();
  else return `${0}${minutes.toString()}`;
}

/**
 * Takes an interval of milliseconds and returns a string representing the
 * minutes component as a stopwatch would display it.
 */
export function displayHours(interval) {
  let hours = Math.floor(interval / 100 / 60 / 60) % 60;
  if (hours >= 10) return hours.toString();
  else return `${0}${hours.toString()}`;
}
