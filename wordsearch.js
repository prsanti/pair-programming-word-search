const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
    
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let newArr = [];
  for (let k = 0; k < letters[0].length; k++) {
    newArr.push([]);
  }
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      newArr[j].push(letters[i][j]);
    }
  }
  const verticalJoin = newArr.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;