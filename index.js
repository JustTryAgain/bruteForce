const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
////////////////////////////////////////////////////////////////////////////////////////////////////////

// functions
function brute(maxLength) {
  for (let matrixLength = 0; matrixLength < maxLength; matrixLength++) {
    let passMatrix = matrix(matrixLength);
    while (true) {
      let pass = matrixToString(passMatrix);
      if (login(pass)) {
        return pass;
      }

      let index = getIndex(passMatrix, letters.length);
      if (index === null) {
        break;
      }

      increment(passMatrix, index);
    }
  }

  return null;
}


function login(pass) { //LOGIN
  return pass === "A";
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
    if (matrix[i] !== arrLength - 1) {
      return i;
    }
  }

  return null;
}

function increment(matrix, index) {

  matrix[index]++;

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

console.log(brute(2));

