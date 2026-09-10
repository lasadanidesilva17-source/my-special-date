// EmailJS Initialize

emailjs.init("swYPyxMPl8_3l63r2");



let selectedDate="";

let selectedPlace="";

let selectedOption="";




// YES

function yesClick(){


document.getElementById("page1").classList.add("hidden");


document.getElementById("page2").classList.remove("hidden");


}




// NO

function noClick(){

alert("Please choose YES ❤️");

}




// DATE


function nextDate(){


selectedDate=document.getElementById("date").value;


if(selectedDate==""){


alert("Please select date ❤️");

return;


}


document.getElementById("page2").classList.add("hidden");


document.getElementById("page3").classList.remove("hidden");


}





// CAFE


function cafe(){


selectedPlace="Cafe";


document.getElementById("options").innerHTML=`

<h3>Select Food</h3>


<button onclick="choose('Domino Pizza')">

Domino's Pizza 🍕

</button>


<button onclick="choose('Pizza Hut')">

Pizza Hut 🍕

</button>


<button onclick="choose('KFC')">

KFC 🍗

</button>


`;

}





// BEACH


function beach(){


selectedPlace="Beach";


document.getElementById("options").innerHTML=`

<h3>Select Activity</h3>


<button onclick="choose('Sunset Walk')">

Sunset Walk 🌅

</button>


`;

}





// MOVIE


function movie(){


selectedPlace="Movie";


document.getElementById("options").innerHTML=`

<h3>Select Movie</h3>


<button onclick="choose('Spider-Man')">

Spider-Man 🕷️

</button>


<button onclick="choose('Avengers')">

Avengers

</button>


`;

}





// OPTION SELECT


function choose(value){


selectedOption=value;


}







// NEXT


function nextPlace(){


if(selectedOption==""){


alert("Please select option ❤️");

return;

}



document.getElementById("page3").classList.add("hidden");


document.getElementById("page4").classList.remove("hidden");




document.getElementById("details").innerHTML=`

📅 Date:
${selectedDate}

<br><br>

📍 Place:
${selectedPlace}

<br><br>

❤️ Choice:
${selectedOption}

`;



}









// SEND EMAIL


function sendMail(){



let name=document.getElementById("name").value;


let time=document.getElementById("time").value;


let message=document.getElementById("message").value;



if(name=="" || time==""){


alert("Please fill details ❤️");


return;


}





emailjs.send(

"service_rspseiy",

"template_pqtxahl",


{


name:name,

date:selectedDate,

place:selectedPlace,

choice:selectedOption,

time:time,

message:message


}



)

.then(function(){



alert("Confirmed ❤️ Email Sent");




// Hide confirm

document.getElementById("page4").classList.add("hidden");



// Show final

document.getElementById("page5").classList.remove("hidden");




// Show all details


document.getElementById("finalDetails").innerHTML=`


<b>Name:</b> ${name}

<br><br>


<b>📅 Date:</b> ${selectedDate}

<br><br>


<b>📍 Place:</b> ${selectedPlace}

<br><br>


<b>❤️ Choice:</b> ${selectedOption}

<br><br>


<b>⏰ Time:</b> ${time}

<br><br>


<b>💌 Message:</b> ${message}


`;



})



.catch(function(error){


console.log(error);


alert("Email Failed: "+error.text);


});


}
emailjs.send(

"service_rspseiy",

"template_pqtxahl",

{

name: name,

date: selectedDate,

place: selectedPlace,

choice: selectedOption,

time: time,

message: message

}

)
