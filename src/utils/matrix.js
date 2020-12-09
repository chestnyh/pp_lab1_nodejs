// Object to simplify work with matrices

const Matrix = {
    // method check correct format of matrix
    // matrix is two dimensional array
    isValidMatrix: function(matrix){    

        if(!Array.isArray(matrix)){
            return false;
        }
            
        let columns = 0;
    
        for(let i in matrix){
            
            if(!Array.isArray(matrix[i]))
                return false;
        
            if(i === "0"){
                columns = matrix[i].length;
                continue;
            }
                    
            if(columns !== matrix[i].length)
                return false;   
        
        }
    
        return !!columns;
            
    },
    // Return matrix column amount
    getMatrixColumnsAmount: function(matrix){
    
        if(!Matrix.isValidMatrix(matrix))
            throw new Error("function argument has to be matrix");
    
        return matrix[0].length;
    
    },
    // Return matrix rows amount
    getMatrixRowsAmount: function(matrix){
    
        if(!Matrix.isValidMatrix(matrix))
            throw new Error("function argument has to be matrix");
    
        return matrix.length    
    
    },
    // will multiply matrix1 by matrix2
    multiplyMatrices: function (matrix1, matrix2){
    
        if(Matrix.getMatrixColumnsAmount(matrix1) !== Matrix.getMatrixRowsAmount(matrix2))
            throw new Error("To multiply matrix columns is required matrix1.columns === matrix2.rows");
    
        const resultMatrix = [];
        const resultMatrixRows = matrix1.length;
        const resultMatrixColumns = matrix2[0].length;
    
        for(let i = 0; i < resultMatrixRows; i++){
    
            resultMatrix.push([])
    
            for(let j = 0; j < resultMatrixColumns; j ++){
    
                let element = 0;
    
                for(let k in matrix1[i]){
    
                    element += matrix1[i][k]*matrix2[k][j];
    
                }
    
                resultMatrix[i].push(element)
    
            }
    
        }
    
        return resultMatrix;
    
    },
    // will multiply scalar value by matrix
    multiplyScalarAndMatrix: function(scalar, matrix){

        if(typeof scalar !== "number")
            throw new Error("Wrong scalar type for function multipleScalarAndMatrix");
    
        if(!Matrix.isValidMatrix(matrix))
            throw new Error("function argument matrix has to be valid matrix");
    
        result = [];    
    
        for(let i in matrix){
    
            result.push([]);
    
            for(let j in matrix[i]){
                result[i].push(matrix[i][j]*scalar)
            }
    
        }    
    
        return result;
    
    },
    // will transpose matrix
    transposeMatrix: function(matrix){

        if(!Matrix.isValidMatrix(matrix))
            throw new Error("Wrong matrix format in function params");
    
        const result = [];    
        const resultMatrixColumns = Matrix.getMatrixRowsAmount(matrix); 
        const resultMatrixRows = Matrix.getMatrixColumnsAmount(matrix);
    
        for(let i = 0; i < resultMatrixRows; i++){
    
            result.push([]);
    
            for(let j = 0; j < resultMatrixColumns; j++){
    
                result[i].push(matrix[j][i]);
    
            }
    
        }
    
        return result;
    
    },
    // will find max matrix element
    maxMatrixElement: function(matrix){
    
        if(!Matrix.isValidMatrix(matrix))
            throw new Error("function argument has to be matrix");
    
        let max = 0;
        
        for(let i in matrix){
    
            for(let j in matrix[i]){
    
                if(i === "0" && j === "0"){
                    max = matrix[i][j];
                    continue;
                }
    
                if(matrix[i][j] > max){
                    max = matrix[i][j];
                }
    
            }
        }
    
        return max;
    
    }
}

module.exports = Matrix;