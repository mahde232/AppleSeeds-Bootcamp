let numSiblings = parseInt(prompt('How many siblings do you have?'));
if( numSiblings === 1 )
    console.log(`${numSiblings} sibling!`);
else
    if(numSiblings < 1)
        console.log('No siblings');
    else
        console.log('More than 1 sibling');