// Code your solution in this file!
``
function distanceFromHqInBlocks(num) {
    return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
   const distanceTravelled = distanceTravelledInFeet(start, destination);
   console.log(distanceTravelled);
   if (distanceTravelled < 401) {
       return 0;
  } else if (distanceTravelled > 399 && distanceTravelled < 2001) {
        return (distanceTravelled - 400) * 0.02;
   } else if (distanceTravelled > 2000 && distanceTravelled < 2501) {
       return 25;
   } else {
       return 'cannot travel that far';
   }

}