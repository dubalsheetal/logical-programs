function spaceCount(str){
    var count=0;
    console.log(`String is : ${str}`);
    for (let index = 0; index < str.length-1; index++) {
        const element = str[index];
        if (str[index]==" ") {
            count++;
            
        }
        
    }
    return count;

}
let result=spaceCount(`Revision is the mother of success`);
console.log(`Count of spaces in string is : ${result}`);
console.log(`*****************************************************`);
let result1=spaceCount(`JavaScript is the language of internet world`);
console.log(`Count of spaces in string is : ${result1}`);


