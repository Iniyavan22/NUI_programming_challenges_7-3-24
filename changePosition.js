function changePostion(inputArray,shifts){
    //check arguments passed or not
    if(inputArray && shifts){
        if (inputArray.length>=shifts && shifts>0){
            //removing at the end and appending in 0th index
            for (let i = 0; i < shifts; i++) {
                inputArray.unshift(inputArray.pop());
            };
            return inputArray;
        }
        else{
            console.log("elements given are less than shifts");
        };
    }
    else{
        console.log("argument not passed");
    };
};


const inputArray =[3, 45, 42, 11, 34];
const shifts=2;

if(inputArray && shifts){
    console.log(changePostion(inputArray,shifts));
}
else{
    console.log("please give the required parameter");
};