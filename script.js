const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const proposal = document.getElementById("proposal");
const mainSite = document.getElementById("mainSite");
const unlockBtn = document.getElementById("unlockBtn");
const music = document.getElementById("bgMusic");

let scale = 1;

/* MESSAGE CHANGE */
const messages = [
"Are you sure?",
"Think again 😳",
"Really no?",
"Last chance...",
"I'll cry 😭",
"Say yes please 💖",
"Don't break my heart 💔",
"You know you want to... 😉",
"I promise it's fun! 🎉",
"Please say yes! 🙏",
"I can't live without you! 🥺",
"You're my everything! 🌹",
"Say yes and make me the happiest person alive! 🥰",
"I love you so much! ❤️",
"Please say yes! 💕",
"I can't imagine life without you! 🌟",
"You're the love of my life! 💘",
"Say yes and let's create beautiful memories together! 🌈",
"I want to spend forever with you! 💍",
"Please say yes and be mine! 💖",
"I can't wait to start this journey with you! 🚀",
"Say yes and let's make our dreams come true! 🌠",
"I love you more than words can express! 💌",
"Please say yes and let's build a future together! 🏡",
"You're the one I've been waiting for! 💘",
"Say yes and let's make every day special! 🌹",
"I can't wait to call you mine! 💍",
"Please say yes and let's make this official! 💖",
"I love you to the moon and back! 🌙",
"Say yes and let's make this love story unforgettable! 📖",
"Please say yes and let's start our forever together! 💕",
"Happy Valentine's Day! Will you be mine? 💝"
];

let msgIndex = 0;

noBtn.addEventListener("mouseenter",()=>{

/* Change message every hover */
document.getElementById("noMessage").textContent =
messages[msgIndex++ % messages.length];

/* Movement confined inside buttons container */
const container = document.querySelector(".buttons");

const containerRect = container.getBoundingClientRect();
const yesRect = yesBtn.getBoundingClientRect();

let newLeft, newTop;
let tries = 0;

do{
    newLeft = Math.random() * (container.clientWidth - noBtn.offsetWidth);
    newTop  = Math.random() * (container.clientHeight - noBtn.offsetHeight);

    tries++;

}while(
    Math.abs(newLeft - yesBtn.offsetLeft) < 120 &&
    Math.abs(newTop - yesBtn.offsetTop) < 70 &&
    tries < 50
);

/* Apply safe position */
noBtn.style.left = newLeft + "px";
noBtn.style.top  = newTop + "px";

/* YES grows but text stays readable */
scale += 1;

yesBtn.style.padding = (15 + scale) + "px " + (30 + scale*2) + "px";
yesBtn.style.fontSize = (18 + scale*0.3) + "px";
yesBtn.style.borderRadius = (30 + scale) + "px";
});

/* YES CLICK */
yesBtn.onclick = ()=>{
proposal.style.display="none";
mainSite.classList.remove("hidden");
document.body.style.overflow="auto";

music.play().catch(()=>{});
typeWriter();
startSlideshow();
};

/* TYPEWRITER */
const text="Happy Valentine's Day ❤️";
let i=0;
function typeWriter(){
if(i<text.length){
document.getElementById("typewriter").innerHTML+=text[i++];
setTimeout(typeWriter,70);
}
}

/* SLIDESHOW */
function startSlideshow(){
const images=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg"];
let index=0;
setInterval(()=>{
index=(index+1)%images.length;
document.getElementById("slide").src=images[index];
},3000);
}

/* UNLOCK FLOWERS */
unlockBtn.onclick=()=>{
setInterval(createFlower,200);
setInterval(createLily,400);
setInterval(popMemory,1200);
setInterval(createFirework,900);

document.getElementById("loveLetter").classList.remove("hidden");
};

/* FLOWERS */
function createFlower(){
const f=document.createElement("div");
f.className="flower";
f.style.left=Math.random()*100+"vw";
document.body.appendChild(f);
setTimeout(()=>f.remove(),4000);
}

/* LILIES */
function createLily(){
const l=document.createElement("div");
l.className="lily";
l.style.left=Math.random()*100+"vw";
document.body.appendChild(l);
setTimeout(()=>l.remove(),5000);
}

/* MEMORIES */
function popMemory(){
const images=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg","images/pic6.jpg","images/pic7.jpg","images/pic8.jpg","images/pic9.jpg","images/pic10.jpg","images/pic11.jpg","images/pic12.jpg","images/pic13.jpg","images/pic14.jpg","images/pic15.jpg","images/pic16.jpg","images/pic17.jpg","images/pic18.jpg","images/pic19.jpg","images/pic20.jpg"];
const img=document.createElement("img");
img.src=images[Math.floor(Math.random()*images.length)];
img.className="memory";
img.style.left=Math.random()*90+"vw";
img.style.top="80vh";
document.body.appendChild(img);
setTimeout(()=>img.remove(),6000);
}
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

let fireworks = [];

function createFirework(){
const x = Math.random()*canvas.width;
const y = Math.random()*canvas.height/2;

for(let i=0;i<80;i++){
fireworks.push({
x,y,
angle:Math.random()*Math.PI*2,
speed:Math.random()*5+2,
life:100
});
}
}

function animateFireworks(){
ctx.clearRect(0,0,canvas.width,canvas.height);

fireworks.forEach((f,i)=>{
f.x += Math.cos(f.angle)*f.speed;
f.y += Math.sin(f.angle)*f.speed;
f.life--;

ctx.fillStyle="rgba(255,182,193,"+(f.life/100)+")";
ctx.beginPath();
ctx.arc(f.x,f.y,2,0,Math.PI*2);
ctx.fill();

if(f.life<=0)fireworks.splice(i,1);
});

requestAnimationFrame(animateFireworks);
}

animateFireworks();
function closeLetter(){
document.getElementById("loveLetter").classList.add("hidden");
}