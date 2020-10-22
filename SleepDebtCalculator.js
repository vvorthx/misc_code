const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 5;
      break;
    case "sunday":
      return 12.5;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const IdealSleepHours = getIdealSleepHours();
  if (actualSleepHours === IdealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > IdealSleepHours) {
    console.log(
      "You got " +
        (actualSleepHours - IdealSleepHours) +
        " hour(s) of more sleep than needed."
    );
  } else
    console.log(
      "You need " +
        (IdealSleepHours - actualSleepHours) +
        " more hour(s) of sleep!"
    );
};

calculateSleepDebt();
