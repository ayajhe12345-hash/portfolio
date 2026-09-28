window.addEventListener("load",function(){
    alert("أهلا بك في موقعي الشخصي أنا Aya Jhe.")
})

function toggleTheme(){
    document.body.classList.toggle("dark-mode");
}

document.querySelector("form").addEventListener("submit",function(e){
    const name =Document.getElementById("name").value.trim();
    const email =Document.getElementById("email").value.trim();
    const message=Document.getElementById("message").value.trim();
    if(name =="" || email =="" || message == ""){
        alert("يرجى ملء جميع الحقول قبل الإرسال");
        preventDefault.e();
    }else{
        alert("تم إرسال رسالتك بنجاح! سأقوم بالرد قريبا");
    } 
});

//سلايدر المشاريع

let currentSlide =0;
const slides= document.querySelectorAll(".slide");
const dotsContainer=document.getElementById("slider-dots");
slides.forEach((_,index)=>{
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("clik",()=>{
        currentSlide= index;
        showSlide(currentSlide);
    });
    dotsContainer.appendChild("dot")
});
const dots =document.querySelectorAll(".dot");
function showSlide(index){
    slides.forEach((slides,i)=>{
        slides.classList.toggle("active",i===index)
    });
    dots.forEach((dot,i)=>{
        dot.classList.toggle("active",i===index);
    });
}

function nextSlide(){
    currentSlide=(currentSlide + 1)% slides.length;
    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide=(currentSlide - 1 + slides.length)% slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide,5000);

const reveals=document.querySelectorAll(".reveal");
function revealOnScroll(){
    reveals.forEach((el)=>{
        const windowHeight= window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if(elementTop < windowHeight-revealPoint){
            el.classList.add("active")
        }
    });
}

window.addEventListener("scroll",revealOnScroll);
