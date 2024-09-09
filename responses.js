function getBotResponse(input) {
    
    // Simple responses
    if (input.toLowerCase() == "hi" ) {
        return "hi;)";
    } else if (input.toLowerCase() == "who made this project" ) {
        return "this project was made by ajith kumar yeah its me of course";
    }else if(input == "what is your age" || input == "What is your age" || input == "Your age" || input == "your age" || input == "What is your age ajith" || input == "what is your age ajith" || input == "your age?" || input == "Your age?"){

        const date = new Date()
        return date.getFullYear() - 2000 
    }else if(input.toLowerCase() == "you know reactjs" || input.toLowerCase() == "You know react js" || input.toLowerCase() == "you know java" || input.toLowerCase() == "You know java"){

        return "yes i know"
    }else if(input.toLowerCase() == "can i get your number" || input.toLowerCase() == "your number"  || input.toLowerCase() == "Your number?" || input.toLowerCase() == "your contact no" || input.toLowerCase() == "what is your number"){

        return 7358629697
    }else if(input.toLowerCase() == "What is your qualification" || input.toLowerCase() == "What is your qualification?"){

        return "MCA"
    }
     else {
        return "Sorry i don't understand";
    }

//add window.open() function for landpage

}


function test()
{
    var a = document.getElementById('textInput').value;
    console.log(a);
}


