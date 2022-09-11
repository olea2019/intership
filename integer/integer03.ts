// A file size is given in bytes. Find the amount of full Kbytes of this size (1 K = 1024 bytes). Use the operator of integer division.

function getRandomValue(range = 10000) {
    return Math.random() * range | 0;
}

const bytes: number = getRandomValue(10000);
console.log("bytes = ", bytes);

const kbytes:number = Math.trunc(bytes / 1024);
console.log("kbytes = ", kbytes);
