//jshint esversion:6

function getDate() {
  // TO GET THE DAY AND DATE AS TITLE
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
  // END OF THE ALGO TO GET DAY AND DATE
}

module.exports = getDate;
