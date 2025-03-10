'use strict'

const catalog = document.querySelectorAll(".catalog");
const priceList = document.querySelectorAll(".priceList");
const logo = document.querySelectorAll(".logo");
const supplement = document.querySelectorAll(".supplement")
const lineList = document.querySelectorAll('.lineList')


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

function lineListHandler(event) {
  event.preventDefault(); 
  const link = event.target.closest('a');
  if (link && link.href) {
    window.open(link.href, '_blank');
  }
}

lineList.forEach((lineListItem) => {
  lineListItem.addEventListener('click', lineListHandler);
});