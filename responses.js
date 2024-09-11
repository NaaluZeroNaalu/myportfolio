function getBotResponse(input) {
    
    // Simple responses
    if (input.toLowerCase().trim() == "hi" ) {
        return "hi ;)";
    } else if (input.toLowerCase().includes("who made you".toLowerCase()) || input.toLowerCase().includes("who created you".toLowerCase()) || input.toLowerCase().includes("who create you".toLowerCase())) {
        return "this project was made by ajith kumar";
    }else if(input == "what is your age" || input == "What is your age" || input == "Your age" || input == "your age" || input == "What is your age ajith" || input == "what is your age ajith" || input == "your age?" || input == "Your age?"){

        const date = new Date()
        return date.getFullYear() - 2000 
    }else if(input.toLowerCase().trim() == "you know reactjs" || input.toLowerCase().trim() == "You know react js" || input.toLowerCase().trim() == "you know java" || input.toLowerCase().trim() == "You know java"){

        return "yes i know"
    }else if(input.toLowerCase().trim() == "can i get your number" || input.toLowerCase().trim() == "your number"  || input.toLowerCase().trim() == "Your number?" || input.toLowerCase().trim() == "your contact no" || input.toLowerCase().trim() == "what is your number"){

        return 7358629697
        
    }else if(input.trim().toLowerCase() == "What is your qualification" || input.trim().toLowerCase() == "What is your qualification?"){


        return "MCA"

    }else if(input.trim().toLowerCase().startsWith("how many experience")){


        return 1.7+"years"
    }else if(input.trim().toLowerCase().startsWith("what is your name") || input.trim().toLowerCase().startsWith("your name")){


        return "Dhanalakshmi"
    }
    else if(input.trim().toLowerCase().startsWith("what is your name") || input.trim().toLowerCase().startsWith("your name")){


        return "Ajith Kumar R"
    }
    else if(input.trim().toLowerCase().startsWith("you from") || input.trim().toLowerCase().startsWith("where are you") || input.trim().toLowerCase() == "your location"){

        return "Chennai"
    }
    else if(input.toLowerCase().includes("address".toLowerCase())){

        return `NO 11 vallalar street\n MGR Nagar \nChennai 78 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d286.7518634724965!2d80.19933101538759!3d13.035738040575374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725873847699!5m2!1sen!2sin" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    
    }else if(input.trim().toLowerCase().startsWith("thank you") || input.trim().toLowerCase().startsWith("ok thank you") || input.trim().toLowerCase().startsWith("ok thankyou") || input.trim().toLowerCase().startsWith("thankyou")){

        return "You are Welcome"
    }
    else if(input.trim().toLowerCase().startsWith("contact") || input.trim().toLowerCase().endsWith("i contact you") || input.trim().toLowerCase().startsWith("your contact")){

        return "Whatsapp : 7358629697 <br>Mobile : 7358629697<br> Gmail:<a href='mailto:ajithruflex1210@gmail.com'>ajithruflex1210@gmail.com</a>"
    }
    else if(input.toLowerCase().includes("have whatsapp".toLowerCase())){

        return "Yes here my whatsapp number <br>Whatsapp : 7358629697"
    }
    else if(input.trim().toLowerCase().endsWith("good") || input.trim().toLowerCase().startsWith("you are grate") || input.trim().toLowerCase().startsWith("you are a grate")){

        return "Thanks"
    }else if(input.trim().toLowerCase().endsWith("your favorite food") || input.trim().toLowerCase().endsWith("what is your favorite food")){

        return "Biriyani"
    }else if(input.trim().toLowerCase().startsWith("tell me about you") || input.trim().toLowerCase().startsWith("tell me about yourself") || input.trim().toLowerCase().startsWith("introduce yourself")){

        
        return "I'm Ajith Kumar i am a software developer with 1.7 years experience in various technologies including ReactJS and Java And I have a Master's degree in Computer Applications (MCA) and am passionate about building innovative solutions.";
      
    }else if(input.trim().toLowerCase().endsWith("how will you see your self after five years") ){

        return "i would have been develop my skill and i would see my self in next five years"
    }
    else if(input.toLowerCase().includes("your hobbies".toLowerCase())){

        return "singining song <br> Drawing <br>"
    }else if(input.toLowerCase().includes("cgpa in mca".toLowerCase())){

        return "I am currently pursuing MCA"
    }else if(input.toLowerCase().includes("cgpa in bca".toLowerCase())){

        return "78.08%"
    }else if(input.toLowerCase().includes("percentage in 10th".toLowerCase())){

        return "72.8%"
    }else if(input.toLowerCase().includes("percentage in 12th".toLowerCase())){

        return "58.42%"
    }else if(input.toLowerCase().includes("your cgpa".toLowerCase())){

        return "MCA: Pursuing <br>BCA: 72.08%"
    }else if(input.toLowerCase().includes("previous company name".toLowerCase())){

        return "IZEON INNOVATIVE PVT LTD"
    }else if(input.toLowerCase().includes("your salary".toLowerCase())){

        return "2LPA"
    }else if(input.toLowerCase().includes("expected salary".toLowerCase())){

        return "3 - 4LPA !"
    }else if(input.toLowerCase().includes("love you".toLowerCase())){

        return "love you too... !"
    }else if(input.toLowerCase().includes("i like your project".toLowerCase())){

        return "Thank you"
    }else if(input.toLowerCase().includes("who are you".toLowerCase())){

        return "Me or who created me"
    }else if(input.toLowerCase().includes("you".toLowerCase())){

        return "I’m an AI bot created with a custom dataset,i dont use any predefined APIs like Chatgpt <br> i am not more intellegent like Chatgpt, in simple term i am a weak AI ;) but oru naal na nalla AI ya varuvean, What would you like to know or discuss today?"
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


