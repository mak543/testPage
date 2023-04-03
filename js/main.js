const firstBtn_ = document.getElementById('firstBtn_');


const containerMenu_3_ = document.getElementById('containerMenu_3_');


const containerGreeting =  document.getElementById('containerGreeting');


const variantJPG_2_ = document.getElementById('variantJPG_2_')


const exitBtn_ = document.getElementById('exitBtn_') 


const containerGreeting_2 = document.getElementById('containerGreeting_2');



firstBtn_.addEventListener('click', function () {
   firstBtn_.style.display = 'none';
  variantJPG_2_.style.display = 'none';
containerGreeting_2.style.display = 'none';
containerMenu_3_.style.display = 'block';
});
exitBtn_.addEventListener('click', function () {
  containerMenu_3_.style.display = 'none';
  firstBtn_.style.display = 'block';
  variantJPG_2_.style.display = 'block';
  containerGreeting_2.style.display = 'inline-block';

});


const btnRu = document.getElementById('btnRu');
const btnEng = document.getElementById('btnEng');

btnRu.addEventListener('click', function() {
  btnRu.style.color = 'grey'
  btnEng.style.color = 'black'
});

btnEng.addEventListener('click', function() {
  btnEng.style.color = 'grey'
  btnRu.style.color = 'black'
  
});
const btnRu_1 = document.getElementById('btnRu_1');
const btnEng_1 = document.getElementById('btnEng_1');

btnRu_1.addEventListener('click', function() {
  btnRu_1.style.color = 'grey'
  btnEng_1.style.color = 'black'
});

btnEng_1.addEventListener('click', function() {
  btnEng_1.style.color = 'grey'
  btnRu_1.style.color = 'black'
  
});