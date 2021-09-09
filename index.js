
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
////////////////////////////////////////////////////////////////////////////////////////////////////////

// functions
function brute(maxLength) {

  for (let matrixLength = 0; matrixLength < maxLength; matrixLength++) {
    let a = matrix(matrixLength);
    while (true) {
      let Indx = getIndex(a, letters.length);
      if (Indx == null) {
        break;
      }
      let pass = matrixToString(increment(a, Indx));
      if (login(pass)===true) {
        return console.log('pass find is '+pass);
      }
    }
  }
}


function login(pass) { //LOGIN
  return pass === "AAA";
}


function matrix(length) {
  let matrix = {};

  for (let i = 0; i <= length; i++) {
    matrix[i] = 0;
  }

  return matrix;
}


function getIndex(matrix, arrLength) {
  
  for (let i = Object.values(matrix).length - 1; i >= 0; i--) {
    if (matrix[i]!==arrLength - 1) {
      return i;
    }
  }
  return null;
}

function increment(matrix, index) {
  matrix[index]++;

  // if (prevIndex === null || index === prevIndex) {
  //   return matrix;
  // }

  for (let i = index + 1; i < Object.values(matrix).length; i++) {
    matrix[i] = 0;
  }

  return matrix;
}

function matrixToString(matrix) { 
  const valuesArr = Object.values(matrix);
  let str = '';

  valuesArr.forEach(el => {
    str += letters[el];
  })

  return str;
}



 brute(3);

