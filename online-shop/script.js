const shopNow = document.querySelectorAll('btn-log-in')

function buttonHandler(event){
  event.preventDefault();
  const link = event.target.closest('a'); // Find the closest anchor element (in case of nested elements)
  if (link && link.href) {
    window.open(link.href, '_blank'); // Open the link in a new window/tab
  }
}

shopNow.forEach((shopItem) => {
  shopItem.addEventListener('click', buttonHandler);
});
