import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = onAddingImage(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function onAddingImage(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `<div class = "gallery__item">
      <a class = "gallery__link" href = "${original}">
      <img class="gallery__image"
          src="${preview}"
          alt="${description}"
          data-src="${original}"/>
          </a>
          </div>`
    )
    .join("");
}

gallery.addEventListener("click", onImgClick);
const instance = basicLightbox.create(
  `
    <img src="" width="800" height="600">
`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscClick);
    },
    onclose: (instance) => document.removeEventListener("keydown", onEscClick),
  }
);
function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = e.target.dataset.src;
  instance.show();
}

function onEscClick(evt) {
  if (evt.key === "Escape") {
    instance.close();
  }
}

console.log(galleryItems);
