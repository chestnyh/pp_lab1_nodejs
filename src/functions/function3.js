// O = MAX(MP*MR)*T
const {maxMatrixElement, multiplyMatrices} = require("../utils/matrix");
const {multiplyVectorByScalar} = require("../utils/vector");

console.log("Task3 started");

const matrix_MP = [
    [1, 2, 3, 4, 6],
    [2, -100, 6, 8, 8],
    [6,7,7,3, 8],
    [9,8,7,-1, 8]
];

const matrix_MR = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
];

const vector_T = {x: 12, y: 66};

const result = multiplyVectorByScalar(
    maxMatrixElement(
        multiplyMatrices(matrix_MP, matrix_MR)
    ), 
    vector_T
);

console.log("Task3 finished");