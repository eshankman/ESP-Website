const catalog = document.querySelectorAll(".btn_catalog");
const priceList = document.querySelectorAll(".btn_price_list");

function catalogHandler(event){
  event.preventDefault();
  const link = event.target.closest('a'); // Find the closest anchor element (in case of nested elements)
  if (link && link.href) {
    window.open(link.href, '_blank'); // Open the link in a new window/tab
  }
}

catalog.forEach((catalogItem) => {
  catalogItem.addEventListener('click', catalogHandler);
});

function priceListHandler(event){
  event.preventDefault();
  const link = event.target.closest('a'); // Find the closest anchor element (in case of nested elements)
  if (link && link.href) {
    window.open(link.href, '_blank'); // Open the link in a new window/tab
  }
}

priceList.forEach((priceListItem) => {
  priceListItem.addEventListener('click', priceListHandler);
});

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  lightbox.style.display = 'flex'; // Show the lightbox
  lightboxImg.src = imageSrc; // Set the image source to the clicked image
}

document.querySelector('.lightbox .close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none'; // Close the lightbox
});

function supplementHandler(event){
  event.preventDefault();
  const link = event.target.closest('a'); // Find the closest anchor element (in case of nested elements)
  if (link && link.href) {
    window.open(link.href, '_blank'); // Open the link in a new window/tab
  }
}

supplement.forEach((supplementItem) => {
  supplementItem.addEventListener('click', supplementHandler);
});

