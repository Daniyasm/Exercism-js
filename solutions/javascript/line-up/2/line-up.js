//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let numberEnding = number % 10;
  let lastTwodigits = number % 100;
  let ordinalNumeral;
  if (numberEnding === 1 && lastTwodigits !== 11) {
    ordinalNumeral = "st";
  } else if (numberEnding === 2 && lastTwodigits !== 12) {
    ordinalNumeral = "nd";
  } else if (numberEnding === 3 && lastTwodigits !== 13) {
    ordinalNumeral = "rd";
  } else {
    ordinalNumeral = "th";
  }
  return `${name}, you are the ${number}${ordinalNumeral} customer we serve today. Thank you!`;
};
