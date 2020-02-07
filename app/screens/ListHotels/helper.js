/**
 * It sorts the hotels array in ascending/descending order by the user rating.
 *
 * @param {Array} hotels array of hotel objects
 * @param {Boolean} isAscending sorts in ascending/descending order
 */
export const sortHotelByUserRating = (hotels, isAscending) => {
  const result = hotels.sort((a, b) => {
    const ratingA = isAscending ? a.userRating : b.userRating;
    const ratingB = isAscending ? b.userRating : a.userRating;

    let comparison = 0;
    if (ratingA > ratingB) {
      comparison = 1;
    } else if (ratingA < ratingB) {
      comparison = -1;
    }

    return comparison;
  });

  return result;
};
