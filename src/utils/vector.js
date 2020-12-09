const Vector = {
    // Will check right vertor data format
    // Vector has to be object with x and y number properties
    isVector(vector){

        return vector && vector.x && vector.y && Number.isInteger(vector.x) && Number.isInteger(vector.y)

    },
    // will multiply vector by scalar
    multiplyVectorByScalar: function(scalar, vector){

        if(typeof scalar !== "number")
            throw new Error("Scalar has to be integer");
        
        if(!Vector.isVector(vector))
            throw new Error("Wrong vector format in method");
        
        return {
            x: vector.x*scalar, 
            y: vector.y*scalar
        };    

    },
    // will find scalar dot of two vectors
    scalarDot: function(vector1, vector2){

        if(!Vector.isVector(vector1))
            throw new Error("Wrong vector1 format in method");

        if(!Vector.isVector(vector2))
            throw new Error("Wrong vector2 format in method");    

        return vector1.x*vector2.x + vector1.y*vector2.y
    }
}

module.exports = Vector