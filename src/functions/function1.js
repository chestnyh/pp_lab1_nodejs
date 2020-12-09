// MD = (B*C)*(MA*ME);
const {multiplyMatrices, multiplyScalarAndMatrix} = require("../utils/matrix.js");
const {scalarDot} = require("../utils/vector.js");

console.log("Task1 started");

const vector_B = {x: 2, y: 2};
const vector_C = {x: 3, y: 8};

const matrix_MA = [
    [1,  2,  3],
    [4,  5,  6],
    [7,  8,  9]
];
const matrix_ME = [
    [1, 2, 3, 9],
    [4, 5, 6, 9],
    [7, 8, 9, 9]
];

const result = multiplyScalarAndMatrix(
    scalarDot(vector_B, vector_C), 
    multiplyMatrices(matrix_MA, matrix_ME)
);

console.log("Task1 finished");