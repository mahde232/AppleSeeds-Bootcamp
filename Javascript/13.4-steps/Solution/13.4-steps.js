function drawSteps(N) {
    for(let i = 0; i < N; i++)
    {
        let str = '';
        for(let j = 0; j <= i; j++)
            str += '#';
        for(let j = 0; j < N-i-1; j++)
            str += ' ';
        let tempArr = str.split();
        tempArr.unshift(`'`);
        tempArr.push(`'`);
        str = tempArr.join('');
        console.log(str);
    }
}

drawSteps(10);