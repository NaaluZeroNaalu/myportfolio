function getBotResponse(input) {
    
    // Simple responses
    if (input == "hi" || input == "HI" || input == "Hi") {
        return "hi;)";
    } else if (input == "who made this project" || input == "who made this website" || input == "Who made this project" || input == "Who made this website") {
        return "this project was made by ajith kumar yeah its me of course";
    }else if(input == "what is your age" || input == "What is your age" || input == "Your age" || input == "your age" || input == "What is your age ajith" || input == "what is your age ajith" || input == "your age?" || input == "Your age?"){

        const date = new Date()
        return date.getFullYear() - 2000 
    }else if(input == "you know reactjs" || input == "You know react js" || input == "you know java" || input == "You know java"){

        return "yes i know"
    }else if(input == "can i get your number" || input == "your number" || input == "Your number" || input == "Your number?" || input == "Your contact no" || input == "your contact no"){

        return 7358629697
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


