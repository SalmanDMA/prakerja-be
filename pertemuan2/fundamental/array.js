const myArray = ['Cokelat', 42.5, 22, true, 'JavaScript'];
console.log(myArray[1]);

console.log('Panjang Array: ' + myArray.length);

myArray.push('Cokelat Baru');
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift('Cokelat Unshift');
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.splice(1, 4, 'Cokelat Baru', 'Cokelat Baru Baru');
console.log(myArray);

const month = ['Januari', 'Februari', 'Maret', 'April'];
console.log('before splice : ' + month);

month.splice(2, 0, 'April', 'Mei');
console.log('after splice : ' + month);
