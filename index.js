//-----------skills percentage start-------------

let per = document.getElementsByClassName("percentage")
let num = 0
let c = setInterval(()=>{
    
    if(num < 100){
        per[0].innerHTML = num++;
        per[1].innerHTML = num++;
        per[2].innerHTML = num++;
        per[3].innerHTML = num++
        per[4].innerHTML = num++;
        per[5].innerHTML = num++;
        per[6].innerHTML = num++;
        per[7].innerHTML = num++;
        per[8].innerHTML = num++;
        per[9].innerHTML = num++;
        per[10].innerHTML = num++;
        per[11].innerHTML = num++;
        per[12].innerHTML = num++;
        per[13].innerHTML = num++;
    }else{
        
        clearInterval(c)
        per[0].innerHTML = 59;
        per[1].innerHTML = 76;
        per[2].innerHTML = 87;
        per[3].innerHTML = 86;
        per[4].innerHTML = 95;
        per[5].innerHTML = 57;
        per[6].innerHTML = 89;
        per[7].innerHTML = 80;
        per[8].innerHTML = 58;
        per[9].innerHTML = 76;
        per[10].innerHTML = 76;
        per[11].innerHTML = 90;
        per[12].innerHTML = 78;
        per[13].innerHTML = 95;
        
    }
},50)


//-----------skills percentage end-------------