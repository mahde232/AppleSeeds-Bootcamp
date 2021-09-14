const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

countCharacters = function(arr) {
    let tempString = arr.join(''); //convert from array of strings to 1 big string
    tempString = tempString.split(' ').join(''); //convert from string with spaces to string with no spaces
    tempString = tempString.toLowerCase(); //case insensitive
    // console.log(tempString);
    let tempObj = {}
    for(let i = 0; i < tempString.length; i++)
    {
        tempObj['' + tempString[i]] = 0; //create the keys with value 0
    }
    for(let i = 0; i < tempString.length; i++)
    {
        tempObj['' + tempString[i]]++; //count each appearance
    }
    return tempObj;
}

let result = countCharacters(array);
console.log(result);

let max,amount=0;
for (let key in result) //go over all the properties of the object (this gives ALL, including the inherited ones)
{
    if(result.hasOwnProperty(key)) //only look at the keys we created, not inherited ones
    {
        if(result[key] >= amount) //casual max check
            {
                max=key;
                amount=result[key];
            }
    }
}
console.log(max);
