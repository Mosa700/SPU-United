 const bar = document.getElementById('bar');
 const close = document.getElementById('close');
 const nav = document.getElementById('navbar');
 
 if (bar) {
	 bar.addEventListener('click', () => {
		 nav.classList.add('active');
	 })
 }
 if (close) {
	 close.addEventListener('click', () => {
		 nav.classList.remove('active');
	 })
 }
 
let bigImg = document.querySelector('.big-img img');
	function showImg(pic){
		bigImg.src = pic;
	}
let carts = document.querySelectorAll('.add-cart');
	for (let i=0; i < carts.length; i++) {
		carts[i].addEventListener('click', () => {
			console.log("addes to cart");
		})
	}