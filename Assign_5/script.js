function rectangleArea(length = 5, width = 4) {
    return length * width;
}


console.log("Standard Function Area (Default 5x4):", rectangleArea());

const calculateArea = (length, width) => length * width;


console.log("Arrow Function Area (Custom 10x3):", calculateArea(10, 3));

function scopeTest() {
    let functionVar = "I am inside the function";
    console.log(functionVar);
}
scopeTest();
{
    let blockVar = "I am inside the block";
}
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}