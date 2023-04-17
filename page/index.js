const editbutton= document.querySelector(".profile__edit-button");
const popup=  document.querySelector(".pop-up");
const closeicon= document.querySelector(".pop-up__close-icon");
const form= document.querySelector(".form");
const save= document.querySelector(".form__button");

function handlerdisplaypopup() {
    popup.classList.toggle("pop-up_open")
}

function handlerprofile (event){
    event.preventDefault();
    const nameprofile= document.querySelector("#heading");
    const mainprofile= document.querySelector("#subheading");
    const profile= document.querySelector(".profile__profile-name");
    const main= document.querySelector(".profile__profile-main");
    profile.innerHTML=nameprofile.value;
    main.innerHTML=mainprofile.value;
    handlerdisplaypopup();
}

editbutton.addEventListener("click",handlerdisplaypopup);
closeicon.addEventListener("click",handlerdisplaypopup);
form.addEventListener("submit",handlerprofile);