// Exercise 1
console.log("Exercise 1 - Array from Range");

//give the function 2 numbers to create an array through that range

const number1 = arrayFromRange(-5,4);
console.log(number1);

function arrayFromRange(min, max){
    let numbers=[];
    for(let i=min ; i<=max ; i++){
        numbers.push(i);
    }
    return numbers;
}


// Exercise 2
console.log("\nExercise 2 - Includes");

//write a function like the include method
const number2 = [1,2,3,4];

console.log(includes(number2,3));

function includes (array, searchElement){
    for(let key of array) {
        if(key === searchElement) return true;
    }
    return false;
}



// Exercise 3
console.log("\nExercise 3 - Except");


const number3 = [1,2,3,4,5,6];
const output3 =except(number3, [1,2]);

//output is the first argument of the function except the values in the array of the second argument

console.log(output3);

function except (array, excluded){
    const out = [];
    for (let element of array){
        if(!excluded.includes(element)) out.push(element);
    }
    return out;
}



// Exercise 4
console.log("\nExercise 4 - Moving an Element");

const number4= [1,2,3,4];
const output4=move(number4 , 0 , 1);
console.log(output4);

function move(array, index, offset){
    const position= index+offset;
    if (position >= array.length || position<0) {
        console.error("Invalid Offset.");
        return;
    }


    let output=[...array];
    // let element=array[index];
    let element = output.splice(index , 1)[0] ; //[0] because this returns an array withouth the [0] and we want a primitive value not an array
    output.splice((offset-index) , 0 , element);
    return output;
}




// Exercise 5
console.log("\nExercise 5 - Count Occurrences in both reduced(to be revisited later) and not reduced ");
console.log("\nExercise 3 - from exercises assigned by samar ");
const number5 = [1,1,1,1,1, 2, 3 ,4];
const count = countOccurances(number5, 1);

console.log(count);

function countOccurances(array , searchElement){

    // return array.reduce((accumulator, current)=>{
    //     const occurance= (current === searchElement) ? 1 : 0;
    //     return accumulator + occurance;
    // }, 0);



    let count=0;
    for (let key of array){
        if (key === searchElement)count++;
    }
    return count;
}




// Exercise 6
console.log("\nExercise 6 - Get Max in both reduced and not reduced ");


const number6 = [1, 2, 3, 4, 0 ,9 , 0 ,1];
const max = getMax(number6);

console.log(max);

function getMax(array){
    // let max = array[0];
    // for(let key of array )
    //     if(key>max) max=key;
    // return max;


    return array.reduce((a,b) => (a>b)? a: b);
}



// Exercise 7
console.log("\nExercise 7 - Movies in both reduced and not reduced ");

const movies = [
    {title: 'a' , year: 2018 , rating : 4.5},
    {title: 'b' , year: 2018 , rating : 4.7},
    {title: 'c' , year: 2018 , rating : 3},
    {title: 'd' , year: 2017 , rating : 4.5},
];

// get all movies in 2018 with rating > 4 
//sort them by their ratings in a descending order
//only display their titles


let out = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating-b.rating).reverse()
    .map(m => m.title);

console.log(out);


// function moviesDisplay(array){
//     let output=[];
//     for (let index of array)
//         if(index.rating > 4 && ) output.push(array[index]);
//     output.reverse();
// }