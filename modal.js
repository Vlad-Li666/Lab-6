'use strict';

document.querySelector('.btnOpen').onclick = function(e){
  document.querySelector('.modal').classList.add('modalOpen');
}
document.querySelector('.btnClose').onclick = function(e){
  document.querySelector('.modal').classList.remove('modalOpen');
}