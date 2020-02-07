import { HOTELS_ENDPOINT } from './constants';

/**
 * Fetches all hotels from the API.
 *
 * @returns {Array} Array of hotel objects with the following properties
 * @returns Null if the fetch fails
 */
export const fetchHotels = async () => {
  try {
    const response = await fetch(HOTELS_ENDPOINT);
    const responseJson = await response.json();

    return responseJson.hotels;
  } catch (error) {
    return null;
  }
};
