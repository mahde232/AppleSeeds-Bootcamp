function assignLetterToGrade(grade){
    if (grade <= 64)
        console.log("F");
    else if (grade <= 69)
            console.log("D");
        else if (grade <= 79)
                console.log("C");
            else if(grade <= 89)
                    console.log("B");
                else
                    console.log("A");
}

assignLetterToGrade(100);