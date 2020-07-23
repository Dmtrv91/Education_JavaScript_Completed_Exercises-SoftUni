function daysOfWeek(input) 
{
    if (input >= '1' && input <=7)
    
    switch (input){
        case '1': console.log('Monday'); break;
        case '2': console.log('Tuesday'); break;
        case '3': console.log('Wednesday'); break;
        case '4': console.log('Thursday'); break;
        case '5': console.log('Friday'); break;
        case '6': console.log('Satyrday'); break;
        case '7': console.log('Sunday'); break;

    }else {
       console.log('error');
    }
}

daysOfWeek('2');