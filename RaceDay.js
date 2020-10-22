let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunners = true;

let runnersAge = 16;

if (runnersAge > 18 && earlyRunners) {
  raceNumber += 1000;
  console.log(
    `The race will start at 9:30 am. Your race number is: ${raceNumber}.`
  );
} else if (runnersAge > 18 && !earlyRunners) {
  console.log(
    `The race will start at 11:00 am. Your race number is: ${raceNumber}.`
  );
} else if (runnersAge < 18) {
  console.log(
    `The race will start at 12:30 pm. Your race number is: ${raceNumber}.`
  );
} else runnersAge === 18;
{
  console.log("Please see the registration desk.");
}
