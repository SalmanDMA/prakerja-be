const favorites = ['Mango', 'Poly', 'Ajax'];
console.log(favorites);

console.log(...favorites);

const others = ['Peach', 'Cherry'];

const allFav = [favorites, others];
console.log(allFav);

const allFavWithSpread = [...favorites, ...others];
console.log(allFavWithSpread);

const allFavWithOneSpread = [favorites, ...others];
console.log(allFavWithOneSpread);
