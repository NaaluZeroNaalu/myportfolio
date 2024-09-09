function getBotResponse(input) {
    
    // Simple responses
    if (input.toLowerCase() == "hi" ) {
        return "hi ;)";
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
    }else if(input.toLowerCase().startsWith("how many experience")){

        return 1.7+"years"
    }else if(input.toLowerCase().startsWith("what is your name") || input.toLowerCase().startsWith("your name")){

        return "Ajith Kumar R"
    }
    else if(input.toLowerCase().startsWith("what is your name") || input.toLowerCase().startsWith("your name")){

        return "Ajith Kumar R"
    }
    else if(input.toLowerCase().startsWith("you from") || input.toLowerCase().startsWith("where are you") || input.toLowerCase() == "your location"){

        return "Chennai"
    }
    else if(input.toLowerCase().startsWith("your address") || input.toLowerCase().startsWith("your personal address") || input.toLowerCase() == "your permanent address" || input.toLowerCase().startsWith("what is your permanent address")){

        return `NO 11 vallalar street\n MGR Nagar \nChennai 78 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d286.7518634724965!2d80.19933101538759!3d13.035738040575374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725873847699!5m2!1sen!2sin" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    
    }else if(input.toLowerCase().startsWith("thank you") || input.toLowerCase().startsWith("ok thank you") || input.toLowerCase().startsWith("ok thankyou") || input.toLowerCase().startsWith("thankyou")){

        return "You are Welcome"
    }
    else if(input.toLowerCase().startsWith("contact") || input.toLowerCase().endsWith("i contact you")){

        return "Whatsapp : 7358629697 <br>Mobile : 7358629697<br> Gmail:<a href='mailto:ajithruflex1210@gmail.com'>ajithruflex1210@gmail.com</a>"
    }
    else if(input.toLowerCase().endsWith("have whatsapp")){

        return "Yes here my whatsapp number <br>Whatsapp : 7358629697"
    }
    else if(input.toLowerCase().endsWith("good") || input.toLowerCase().startsWith("you are grate") || input.toLowerCase().startsWith("you are a grate")){

        return "Thanks"
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


