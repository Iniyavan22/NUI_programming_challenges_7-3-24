function findNumberPairs(inputArray,sum){

    //check whether the argument is passed or not
    if(inputArray){
        let totalCount=0;
        // looping every successive and precessive elemet
        for(let previous=0; previous<inputArray.length;previous++){
            for(let current=previous+1;current<inputArray.length;current++){
                if(inputArray[previous]+inputArray[current]===sum){
                    totalCount+=1;
                    console.log([inputArray[previous],inputArray[current]]);
                };
            };
        };
        return totalCount;
    }
    else{
        console.log("argument not passed");
    }

};



const inputArray = [4, 2, 5, 6, 8, 1];
const sum = 6;

if (inputArray && sum){
    console.log(findNumberPairs(inputArray,sum));
}
else{
    console.log("please enter the required parameters");
};