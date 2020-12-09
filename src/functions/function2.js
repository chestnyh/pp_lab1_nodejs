// MG = TRANS(MK)*(MH*MF)
const {transposeMatrix, multiplyMatrices} = require("../utils/matrix");

console.log("Task2 started");

const matrix_MK = [
    [1,2],
    [4,5],
    [7,9]
];
const matrix_MH = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
];
const matrix_MF = [
    [1, 2, 3, 6],
    [1, 2, 3, 7],
    [1, 2, 3, 8]
];


result = multiplyMatrices(
    transposeMatrix(matrix_MK), 
    multiplyMatrices(matrix_MH, matrix_MF)
);

console.log("Task2 finished");