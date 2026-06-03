const translations = {

id: {
home: "Beranda",
about: "Tentang",
educationbar: "Pendidikan",
work: "Karya",
skill: "Keahlian",
contact: "Kontak",

title: "Kreator Visual & Junior Front-End Developer",
desc: "Video Editor • Desain Grafis • Pengembang Web",
btn: "Lihat Karya",

aboutTitle: "Tentang Saya",
educationtit: "Pendidikan",
workTitle: "Karya Pilihan",
skillTitle: "Keahlian & Tools",
contactTitle: "Mari Bekerja Sama"
},

en: {
home: "Home",
about: "About",
educationbar: "Education",
work: "Works",
skill: "Skills",
contact: "Contact",

title: "Visual Creator & Junior Front-End Developer",
desc: "Video Editor • Graphic Designer • Web Developer",
btn: "View Works",

aboutTitle: "About Me",
educationtit: "Education",
workTitle: "Featured Works",
skillTitle: "Skills & Tools",
contactTitle: "Let's Work Together"
}

};

let currentLang = localStorage.getItem("lang") || "id";

function setLang(lang){

currentLang = lang;
localStorage.setItem("lang", lang);

document.querySelectorAll("[data-lang]").forEach(el=>{

const key = el.getAttribute("data-lang");

if(translations[lang][key]){
el.textContent = translations[lang][key];
}

});

document.getElementById("langID").classList.remove("active-lang");
document.getElementById("langEN").classList.remove("active-lang");

if(lang === "id"){
document.getElementById("langID").classList.add("active-lang");
}else{
document.getElementById("langEN").classList.add("active-lang");
}

}

document.getElementById("langID").addEventListener("click", ()=>setLang("id"));
document.getElementById("langEN").addEventListener("click", ()=>setLang("en"));

setLang(currentLang);
