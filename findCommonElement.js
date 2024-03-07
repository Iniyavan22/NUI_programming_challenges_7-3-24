function findCommonElement(array1,array2){
    //check argument is passed or not
    if(array1 && array2){
        const commonArray =[];
        let maximumLengthArray;
        let minimumLengthArray;
        // finding minimum length array and traversing it
        if (array1.length >= array2.length){
            maximumLengthArray = array1;
            minimumLengthArray = array2;
        }
        else{
            maximumLengthArray = array2;
            minimumLengthArray = array1;
        };
        for(let i=0;i<minimumLengthArray.length;i++){
            if (maximumLengthArray.includes(minimumLengthArray[i])){
                commonArray.push(minimumLengthArray[i]);
            };
        };
        return commonArray;
    }
    else{
        console.log("argument not passed");
    };
};


const array1=[3, 45, 42, 11, 34];
const array2=[35, -7, 87, 11, 1, 45];



if(array1 && array2){
    console.log(findCommonElement(array1,array2));
}
else{
    console.log("please give the required parameters");
}