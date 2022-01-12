import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWraper = document.querySelector(".gallery");
galleryCreation();
new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

function galleryCreation() {
  galleryWraper.insertAdjacentHTML(
    "afterbegin",
    galleryItems.map(cardCreation).join("")
  );
}

function cardCreation({ preview, original, description }) {
  return ` 
    <li>
    <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
   </li>
    `;
}
