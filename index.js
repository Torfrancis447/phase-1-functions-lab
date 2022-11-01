// Code your solution in this file!
function distanceFromHqInBlocks(currentLocation) {
  //return Math.abs(42 - location)
//}
    if (currentLocation < 42)
      return 42 - currentLocation;

    else (currentLocation > 42)
      return currentLocation - 42
  }


function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;

 }

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
  return(0);
  }
  else if (distance > 400 && distance < 2000) {
  return (distance - 400) * .02 
  }
  else if (distance >= 2000 && distance <= 2500){
  return (25)
  }
  else if (distance > 2500){
  return ('cannot travel that far')
  }
}
  


    // function scuberGreetingForFeet(distance){
  
    //   if (distance <= 199) {
    //     return ('This one is on me!')
    //   } else if (distance > 400 && distance < 2000) {
    //     return ('That will be twenty bucks.')
    //   } else if (distance > 2000 && distance <= 2500 ) {
    //     return ('I will gladly take your thirty bucks.')
    //   } else if (distance > 2500 ) {
    //     return('No can do.')
    //   }
