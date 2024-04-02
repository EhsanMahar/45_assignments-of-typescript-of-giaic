//Cars: write a function that store a information about a car in an object. The function should always recieve
//a manufacturer and a model name.It should then accept an arbitary number of keyword arguments.Call the 
//Function with the required information and two other name-value pairs, such as a color or an optional
//features print the object that's returned to make sure all information was stored correctly.

function storeCarInfo(manufacturer:string,modelName:string, ...extraOption:{ [key :string]:any}[]):
Object {

    const carInfo={
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
}

let answer = storeCarInfo("Honda","Civic",{color:"Black"},{features:["Navigation","Power window"]})
console.log(answer);
