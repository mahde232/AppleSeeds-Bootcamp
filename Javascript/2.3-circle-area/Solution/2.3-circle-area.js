function circleArea(radius){
    console.log(`area of circle with radius=${radius} equals to ${(Math.PI*radius*radius)}`);
    console.log(`rounded down to ${(Math.PI*radius*radius).toFixed(2)}`);
}

circleArea(10);