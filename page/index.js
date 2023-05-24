/* PRIMER FORMULARIO*/

const editButton = document.querySelector(".profile__edit-button");
const popup = document.getElementById("modal-1");
const closeIcon1 = document.getElementById("close1");
const form = document.getElementById("editProfileForm");
const save = document.querySelector(".form__button");

function handlerDisplayPopup() {
  popup.classList.toggle("pop-up_open");
}

function handlerProfile(event) {
  event.preventDefault();
  const nameProfile = document.getElementById("heading");
  const mainProfile = document.getElementById("subheading");
  const profile = document.querySelector(".profile__profile-name");
  const main = document.querySelector(".profile__profile-main");
  profile.innerHTML = nameProfile.value;
  main.innerHTML = mainProfile.value;
  handlerDisplayPopup();
}

editButton.addEventListener("click", handlerDisplayPopup);
closeIcon1.addEventListener("click", handlerDisplayPopup);
form.addEventListener("submit", handlerProfile);

const popUpThreeElement = document.getElementById("modal-3");
const closeIcon3 = document.getElementById("close3");
closeIcon3.addEventListener("click", handleDisplayModalImage);

/*CREACION DE LAS TARJETAS INICIALES*/

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

const cardContainer = document.querySelector(".elements");

function handleLike(likeId) {
  document.getElementById(likeId).classList.toggle("element__like-button-active");
}

function deleteCard(elementId) {
  document.getElementById(elementId).remove();
}

function ClickImage (imgSrc, title) {
  console.log(imgSrc, title);


  const imagePopUpElement = document.getElementById("imagePopUp");
  const imagePopUpTitleElement = document.getElementById("imagePopUpTitle");
  
  // Actualizando los valores del pop up, imagen y titulo
  imagePopUpElement.src = imgSrc;
  imagePopUpTitleElement.textContent = title;
  
  // Displaying modal
  handleDisplayModalImage();
}

function addElement(cardId, cardName, cardLink, likeId) {
  const divElement = document.createElement("div");
  divElement.classList.add("element");
  divElement.id = cardId;

  const image = document.createElement("img");
  image.src = cardLink;
  image.alt = `Foto del ${cardName}`;
  image.classList.add("element__image");
  image.addEventListener("click", () => ClickImage(cardLink, cardName));
  divElement.appendChild(image);

  const deleteElement = document.createElement("img");
  deleteElement.src = "/images/Trash.png";
  deleteElement.alt = "trash";
  deleteElement.classList.add("element__trash");
  deleteElement.addEventListener("click", () => deleteCard(cardId));
  divElement.appendChild(deleteElement);

  const elementText = document.createElement("div");
  elementText.classList.add("element__text");

  const nameElement = document.createElement("h2");
  nameElement.classList.add("element__name-element");
  nameElement.textContent = cardName;

  const likeButton = document.createElement("img");
  likeButton.id = likeId;
  likeButton.src = "/images/Vector.png";
  likeButton.alt = "like button";
  likeButton.classList.add("element__like-button");
  likeButton.addEventListener("click", () => handleLike(likeId));

  elementText.appendChild(nameElement);
  elementText.appendChild(likeButton);

  divElement.appendChild(elementText);
  return divElement;
}

initialCards.forEach((card, index) => {
  const cardName = card.name;
  const cardLink = card.link;
  const cardId = "card-" + index.toString();
  const likeId = "like-" + index.toString();

  const divElement = addElement(cardId, cardName, cardLink, likeId);
  cardContainer.appendChild(divElement);
});

function handleDisplayModal2() {
  popUpTwo.classList.toggle("pop-up_open");
}

function handleDisplayModalImage() {
  popUpThreeElement.classList.toggle("pop-up_open");
}

function handleCreateCardFormSubmit (event) {
  event.preventDefault();
  
  const titleValue = document.getElementById("title").value;
  const linkValue = document.getElementById("image-link").value;
  
  if (!!titleValue && !!linkValue) {
    const cardId = "card-" + cardContainer.children.length.toString();
    const likeId = "like-card-" + cardContainer.children.length.toString();
    
    const divElement = addElement(cardId, titleValue, linkValue, likeId);
    cardContainer.appendChild(divElement);
  
    // Limpiando el formulario
    document.getElementById("title").value = "";
    document.getElementById("image-link").value = "";
  
    handleDisplayModal2();
  }
}

/*SEGUNDO FORMULARIO*/
const addButton = document.querySelector(".profile__add-button");
const modal = document.getElementById("modal-2");
const closeIcon2 = document.getElementById("close2");
const addCardForm = document.getElementById("addCardForm");

function handleDisplayModal2() {
  modal.classList.toggle("pop-up_open");
};

function handleFormTwoSubmit(event) {
  event.preventDefault();
  const cardNameInput = document.getElementById("title");
  const cardLinkInput = document.getElementById("image-link");

  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;

  const cardId = "card-" + Date.now().toString();
  const likeId = "like-" + Date.now().toString();

  const divElement = addElement(cardId, cardName, cardLink, likeId);
  cardContainer.appendChild(divElement);

  cardNameInput.value = "";
  cardLinkInput.value = "";

  handleDisplayModal2();
};

addButton.addEventListener("click", handleDisplayModal2);
closeIcon2.addEventListener("click", handleDisplayModal2);
addCardForm.addEventListener("submit", handleFormTwoSubmit);