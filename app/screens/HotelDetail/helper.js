import { VERY_LOW, LOW, MEDIUM, HIGH, VERY_HIGH } from '../../utils/strings';

/**
 * Given an number between 0 - 9 it returns a classification.
 *
 * @param {Number} rating
 * @returns {String} Rating classification
 */
export function getRatingText(rating) {
  if (rating >= 0 && rating < 3) return VERY_LOW;
  if (rating >= 3 && rating < 5) return LOW;
  if (rating >= 5 && rating < 7) return MEDIUM;
  if (rating >= 7 && rating < 9) return HIGH;
  if (rating >= 9 && rating <= 10) return VERY_HIGH;

  return '';
}

/**
 * Given a time string with the format HH:MM it will return the hour with
 * the 12 hours format and the clock format in a string.
 *
 * @example
 * calculateHour("23:00")
 * Output: {hour: 11, clockFormat: 'PM'}
 *
 *
 * @param {String} timeString
 * @returns {Object} {hour: Number, clockFormat: String}
 */
function calculateHour(timeString) {
  const [hours] = timeString.split(':');
  const hourAMPM = hours % 12 || 12;
  const clockFormat = hours >= 12 ? 'PM' : 'AM';

  return { hour: hourAMPM, clockFormat };
}

/**
 * Given an object with check in / out info it will calculate a new format.
 *
 * @example
 * const checkObject = {
 *   from: "14:00",
 *   to: "20:00"
 * }
 * const result = formatCheckInToRender(checkObject);
 * result = {
 * from: {
 *  hour: 2,
 *  clockFormat: 'PM'
 * }
 * to: {
 *  hour: 8,
 *  clockFormat: 'PM'
 * }}
 *
 * @param {Object} checkObject Check in/out object info.
 */
export function formatCheckInToRender(checkObject) {
  return {
    from: calculateHour(checkObject.from),
    to: calculateHour(checkObject.to),
  };
}
