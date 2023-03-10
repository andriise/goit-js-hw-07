import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = onAddingImage(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function onAddingImage(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class = "gallery__item" href = "${original}">
      <img class="gallery__image"
          src="${preview}"
          alt="${description}"/>
          </a>`
    )
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
