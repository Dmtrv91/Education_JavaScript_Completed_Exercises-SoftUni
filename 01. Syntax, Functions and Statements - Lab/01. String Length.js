function calcLenght(string1, string2, string3) 
{
    let sumLenght = (string1.lenght + string2.lenght + string3.lenght);
    let averageLenght = Math.floor(sumLenght / 3);

    console.log(sumLenght);
    console.log(averageLenght);
}

calcLenght("asf", "asfsd", "asfsd");