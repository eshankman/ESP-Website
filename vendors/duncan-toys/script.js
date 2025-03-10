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

