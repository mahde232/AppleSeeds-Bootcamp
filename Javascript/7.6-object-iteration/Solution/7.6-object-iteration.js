function swap(obj) {
    tempObj = {}
    for (let key in obj) //go over all the properties of the object (this gives ALL, including the inherited ones)
    {
        if(obj.hasOwnProperty(key)) //only look at the keys we created, not inherited ones
        {
            tempObj['' + obj[key]]=key;
        }
    }
    return tempObj;
}

let Mahde = {
    name: 'mahde',
    age: '23'
}
console.log('Before ',Mahde);
Mahde = swap(Mahde);
console.log('After ',Mahde);