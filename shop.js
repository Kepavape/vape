
const cart = JSON.parse(localStorage.getItem('cart')||'{}');
function updateCartBadge(){
  let items=0;
  for(const k in cart){items+=cart[k].qty;}
  const el=document.getElementById('cart-count');
  if(el) el.textContent=items;
  localStorage.setItem('cart',JSON.stringify(cart));
}
document.addEventListener('click',e=>{
  if(e.target.classList.contains('add-to-cart')){
    const card=e.target.closest('.product-card');
    const title=card.dataset.title;
    const price=parseFloat(card.dataset.price)||0;
    const bulk=parseFloat(card.dataset.bulk)||0;
    const img=card.dataset.img||'';
    const qty=parseInt(card.querySelector('.qty').value)||1;
    if(!cart[title]) cart[title]={price,bulk,img,qty:0};
    cart[title].qty+=qty;
    updateCartBadge();
  }
  if(e.target.id==='hamburger'){document.getElementById('nav').classList.toggle('open');}
});
updateCartBadge();
