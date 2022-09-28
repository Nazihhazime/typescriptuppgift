//Mellanrum

//Mellanrum

//Uppgift 1
function max(number1: number, number2: number): number {
  return number1 > number2 ? number1 : number2;
}

//Upgift 2
function landscape(height: number, width: number): boolean {
  return width > height;
}

//Uppgift 3
function rectangelArea(length: number, width: number): number {
  return length * width;
}

//Uppgift 3 Extra
function triangleArea(heigth: number, width: number): number {
  return (heigth * width) / 2;
}

function circleArea(radius: number): number {
  return radius ** 2 * Math.PI;
}

// uppgift 4
function tellFortune(
  numberOfChildren: number,
  partner: string,
  city: string,
  job: string
): string {
  return `You will be an ${job} in the ${city}, married to ${partner} and have ${numberOfChildren} children`;
}

//uppgift 5
function calculateDogAge(humanAge: number): number {
  return humanAge * 7;
}

//Uppgift 5 Extra
function calculateDogAgeDynamic(
  humanAge: number,
  conversionFactor: number
): number {
  return humanAge * conversionFactor;
}

//Upggift 6
function daysOfSuppliers(
  totalResources: number,
  resourcesPerDay: number
): number {
  return Math.floor(totalResources / resourcesPerDay);
}

//Uppgift 7
function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

//Upgift 7 extra
function toCelsius(Fahrenheit: number): number {
  return ((Fahrenheit - 32) * 5) / 9;
}

//Uppgift 8
function ageInSeconds(age: number): number {
  return Math.round(age * 364 * 24 * 60 * 60);
}

// EXTRAUPPGIFTER

function area(form: string, width: number, heigth: number): number {
  if (form === "circle") return circleArea(width / 2);
  if (form === "triangle") return triangleArea(width, heigth);
  return rectangelArea(width, heigth);
}

function checkSpeed(speed: number): string | number {
  const speedlimit: number = 70;
  const points: number = Math.floor((speed - speedlimit) / 5);

  if (speed <= speedlimit) return "OK";
  if (points >= 12) return "Indraget Körkort";
  return points;
}

//The App-component

function App() {
  return <div>{checkSpeed(71)}</div>;
}

export default App;
