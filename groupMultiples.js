function groupMultiples(inputArray){
    //check argument is passed or not
    if(inputArray){
        const outputArray=[];
        for(let i=1;i<11;i++){
            const multiplesDictionary ={};
            const multiplesArray=[];
            for(let j=0;j<inputArray.length;j++){
                if(inputArray[j]%i===0){
                    multiplesArray.push(inputArray[j]);
                };
            };
            multiplesDictionary[i]=multiplesArray;
            outputArray.push(multiplesDictionary);
        };

        return outputArray;
    }
    else{
        console.log("argument not passed");
    };
};

const inputArray = [34, 12, 10, 15, 7, 21, 81];

if (inputArray){
    console.log(groupMultiples(inputArray));
}
else{
    console.log("please enter the required parameter");
};

 