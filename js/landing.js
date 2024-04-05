// Nav Links
function myFunction() {
    var links = document.getElementById("nav-links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}



// loading Page 
let myLoading = document.querySelector(".min-loading");
    window.addEventListener("load" , function(){
        setTimeout(() => {
            myLoading.style.display = "none" ;
        }, 3000);
})




// Dark Mood
const toggle = document.getElementById('toggleDark');
const changeIcon = document.querySelector('nav i')
const darkMode = localStorage.getItem('darkMode');

toggle.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        changeIcon.classList = ("fa-solid fa-sun")
    } else {
        changeIcon.classList = ("fa-solid fa-moon")
    }
}




// collapse FAQ
let mainList = document.querySelectorAll(".questions ul li")
let myButton = document.querySelectorAll(".questions ul li div")
let text = document.querySelectorAll(".questions ul li p")
let myIcon = document.querySelectorAll(".questions ul li div i")

console.log(mainList)
    myButton.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            if (text[index].style.display === "block") {
                text[index].style.display = "none";
                myIcon[index].style.rotate = "0deg"
                mainList[index].style.borderTop = "none"
                mainList[index].style.borderBottom = "1px solid #96A0B5"
                mainList[index].style.backgroundImage = "none"
            } else {
                text[index].style.display = "block";
                myIcon[index].style.rotate = "180deg"
                mainList[index].style.borderTop = "2px solid #583FBC"
                mainList[index].style.borderBottom = "none"
                mainList[index].style.backgroundImage = "linear-gradient(to bottom, var(---bg-collapse) , var(---bg-color))"
            }
        
})})




// form validation send email 

function SendMail(){
    var params = {
    name :document.getElementById("full_name").value,
    email :document.getElementById("full_email").value,
    message  :document.getElementById("full_textarea").value
}
    emailjs.send('service_wre29ud', 'template_11mu2m9',  params).then( alert(" Email Sent!!"))
}