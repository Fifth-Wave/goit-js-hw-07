import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWraper = document.querySelector(".gallery");
galleryCreation();
galleryWraper.addEventListener("click", onCardClick);
let instance = lightBoxCreation(""); //создает начальный экземпляр лайтбокса

function galleryCreation() {
  galleryWraper.insertAdjacentHTML(
    "afterbegin",
    galleryItems.map(cardCreation).join("")
  );
}

function cardCreation({ preview, original, description }) {
  return ` 
    <div class="gallery__item">
        <a class="gallery__link" >
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
}

function onCardClick(evnt) {
  if (evnt.target.nodeName !== "IMG") {
    return;
  }
  const link = evnt.target.dataset.source;
  instance = lightBoxCreation(link);
  instance.show();
}

function lightBoxCreation(link) {
  return basicLightbox.create(`<img src="${link}"/>`, {
    onShow: onLightBoxShow,
    onClose: onLightBoxClose,
  });
}

function onLightBoxShow() {
  window.addEventListener("keydown", onEscClick);
}

function onLightBoxClose() {
  window.removeEventListener("keydown", onEscClick);
}

function onEscClick(evnt) {
  if (evnt.key === "Escape") {
    instance.close();
  }
  return;
}
