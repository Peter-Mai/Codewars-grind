// 7 kyu Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let array = s.split(' ')
  let smallestLength = 0;
  array.forEach((x) => {
    if (smallestLength == 0){
      smallestLength = x.length;
    } else if (x.length < smallestLength){
      smallestLength = x.length;
    }
  })
  return smallestLength
}