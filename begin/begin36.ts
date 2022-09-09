// The velocity of the first car is V1 km/h, the velocity of the second car is V2 km/h, the initial distance between the cars is S km. Find the distance 
// between the cars after T hours provided that the distance is increasing. The required distance is equal to a sum of the initial distance and the total
// distance covered by the both cars (total distance = time · total velocity). 


function getRandomValue(range = 100) {
    return Math.random() * range | 0;
}

const v1: number = getRandomValue(70);
console.log("v1 = ", v1);

let v2: number = getRandomValue(70);
console.log("v2 = ", v2);

let time: number = getRandomValue(20);
console.log("time = ", time);

let initialDistance: number = getRandomValue(100);
console.log("initialDistance = ", initialDistance);

const pasedDistance: number = time * (v1 + v2);
console.log("totalDistance = ", pasedDistance);

const finaleDistance = initialDistance + pasedDistance;
console.log("finaleDistance = ", finaleDistance);
