// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
let gallery = document.querySelector(".gallery");


gallery.insertAdjacentHTML('afterbegin',createItem(galleryItems));//---  << Вставка разметки >>

function createItem(array) {return array.map(({preview,original,description}) => {//---  << Созд. разметки >>
  return`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join("")};

const modalWindow = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});//---  << Созд. БИБЛИОТЕКОЙ мод. окна >>

modalWindow.on('show.simplelightbox', function () {});
