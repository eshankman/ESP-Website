'use strict'

const BTNSPECIALS = document.querySelectorAll('.btn_specials');

function btnSpecialsHandler(event){
  event.preventDefault();
  const link = event.target.closest('a');
  if(link && link.href){
    window.open(link.href, '_blank')
  }
}

BTNSPECIALS.forEach((btnSpecialsItem) => {
  btnSpecialsItem.addEventListener('click', btnSpecialsHandler)
})