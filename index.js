function sumItems(array) {
  // Sum all the numbers in the array
  let initial = 0;
  array.forEach(thing => {
    if (Array.isArray(thing)) {
      initial += sumItems(thing);
    }
    else{
      initial += thing;
    }
  })
  return initial;
}

module.exports = sumItems;