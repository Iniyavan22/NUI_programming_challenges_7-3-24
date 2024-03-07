function findCommonInterestBook(students){
    // check whether the argument is passed or not
    if(students){
        //creating a dictionary that has books read by person
        const booksCollection={};
        for(let student of students){
            for(let i=0;i<student.books.length;i++){
                if (!booksCollection[student.books[i]]){
                    booksCollection[student.books[i]]=[student.name];
                }
                else{
                    booksCollection[student.books[i]].push(student.name);
                };
            };
        };

        const mostCommonInterest={};
        const uniqueArray =[];
        //creating a dictionary that has person and  sharing the interest in reading the book by more than one people
        for(let book in booksCollection){
            let count=0;
            for(let item of booksCollection[book]){
                if(booksCollection[book].length>1 && !uniqueArray.includes(book)){
                    if(!mostCommonInterest[item]){
                        mostCommonInterest[item]=count+1;
                        uniqueArray.push(book)
                    }
                    else{
                        mostCommonInterest[item]+=1;
                    };
                };
            };
        };

        //taking the value from the dictionary and assigning the maximum value
        let maximumInterestCount=0;
        for(let maximumCommonInterest in mostCommonInterest){
            if (maximumInterestCount<=mostCommonInterest[maximumCommonInterest]){
                maximumInterestCount=mostCommonInterest[maximumCommonInterest];
            };
        };

        //whichever keys are matching the value it will be returning the name in the array
        const maximumSharedInterest =[];
        for(let item in mostCommonInterest){
            if(mostCommonInterest[item]===maximumInterestCount){
                maximumSharedInterest.push(item);
            };
        };
 
        return [booksCollection,maximumSharedInterest];
    }
    else{
        console.log("argument not passed");
    };
};


const students = [
    {
      id: 0,
      name: 'Arun',
      books: ['Wings of Fire','Chakra']
    },
    {
      id: 1,
      name: 'Ashok',
      books: ['Chakra', 'War and Peace', 'The Shining']
    },
    {
      id: 2,
      name: 'Balu',
      books: ['Wings of Fire', 'All about Cricket']
    },
    {
      id: 3,
      name: 'Cathi',
      books: ['Against the wind', 'The Shining', 'War and Peace']
    },
];

if (students){
    console.log(findCommonInterestBook(students));
}
else{
    console.log("please enter the required parameter");
}

