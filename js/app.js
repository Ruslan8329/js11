////////////////////////////////////////////////1/////////////////////////////////////////////////

function receptNum(num1, num2) {
  if (num1 < num2) {
    return -1;
  }
  if (num1 > num2) {
    return 1;
  }
  if (num1 === num2) {
    return 0;
  }
}
let result1 = receptNum(4, 1);
console.log(result1);

let result2 = receptNum(8, 7);
console.log(result2);

let result3 = receptNum(1, 1);
console.log(result3);

//////////////////////////////////////////////////////3////////////////////////////////////////////////

function connet(...numbers) {
  return numbers;
}
let result4 = connet(1, 6, 5, 3);
console.log(result4.join(""));

/////////////////////////////////////////////////4////////////////////////////////////////////////////

function rectangleSquare(length, width) {
  if (!width) {
    return length * length;
  } else {
    return length * width;
  }
}
let squareArea = rectangleSquare(4);
console.log(`Плошадь квадрата = ${squareArea}`);
let rectangleArea = rectangleSquare(5, 7);
console.log(`Площадь приямоугольника = ${rectangleArea}`);

///////////////////////////////////////////////7//////////////////////////////////////////////////////

function timeShowFunction(hours, minutes, seconds) {
  if (!hours) {
    hours = "00";
  }
  if (!minutes) {
    minutes = "00";
  }
  if (!seconds) {
    seconds = "00";
  } else {
    hours = hours < 10 ? "0" + hours : hours.toString();
    minutes = minutes < 10 ? "0" + minutes : minutes.toString();
    seconds = seconds < 10 ? "0" + seconds : seconds.toString();
  }
  let formatTime = `${hours}:${minutes}:${seconds}`;
  return formatTime;
}
let result5 = timeShowFunction(11, 40, 15);
console.log(result5);

/////////////////////////////////////////8//////////////////////////////////////////////////

function timeToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}
let seconds = timeToSeconds(12, 34, 4);
console.log(`Время в секундах ${seconds}`);

/////////////////////////////////////////9////////////////////////////////////////////////

// function secondsToHours(seconds) {
//   return seconds / 3600 + (seconds % 3600) / 60 + (seconds % 60) + seconds;
// }
// let hours = secondsToHours(4356);
// console.log(hours);

/////////////////////////////////////////////////////////////////////////////////////////////

function getSecondsDiference(
  firstHours,
  firstMinutes,
  firstSeconds,
  secondHours,
  secondMinutes,
  secondsSeconds
) {
  let firstTime = firstHours * 3600 + firstMinutes * 60 + firstSeconds;
  let secondTime = secondHours * 3600 + secondMinutes * 60 + secondsSeconds;

  let diference = secondTime - firstTime;

  let hours = Math.floor(diference / 3600);
  let minutes = Math.floor((diference % 3600) / 60);
  let seconds = Math.floor(diference % 60);

  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  console.log(firstTime);
  console.log(secondTime);
  console.log(diference);
  return `${hours}:${minutes}:${seconds}`;
}
let newGet = getSecondsDiference(12, 45, 54, 2, 32, 23);
console.log(newGet);
