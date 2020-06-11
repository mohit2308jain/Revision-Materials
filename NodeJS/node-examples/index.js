var rect = require('./rectangle');

solveRectangle = (l, b) => {
    console.log(l + " " + b);

    rect(l, b, (err, rectangle) => {
        if(err){
            console.log("ERROR: "+err.message);
        }
        else{
            console.log("Perimeter: " + rectangle.perimeter());
            console.log("Area: "+rectangle.area())
        }
    });
    console.log("After Call to Rectangle");
}

solveRectangle(1,3);
solveRectangle(0,3);
solveRectangle(4,0);