let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;

plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
});

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if(userInputNumber <= 0){
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
});

//

const addButtonCart = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let prev = parseInt(cartNotification.innerText);

addButtonCart.addEventListener("click", () => {
  prev = prev + userInputNumber;
  cartNotification.innerText = prev;
  cartNotification.style.display = "block";
  drawProductInModal();
});

//

let cartIconBtn = document.querySelector(".header__cart");
let cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(".cart-modal__checkout-container");

cartIconBtn.addEventListener("click", () => {
  // cartModal.classList.toggle("show"); esta funcion agrega y quita en este caso una propiedad de css que tiene display en block;
  cartModal.style.display == "none" ?  cartModal.style.display = "block" : cartModal.style.display = "none";
  if(prev === 0){
    drawProductInModal();
  }
});

//

function deleteProduct(){
  let deleteBtm = document.querySelector(".cart-modal__delete");
  deleteBtm.addEventListener("click", () => {
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    // cartNotification.style.display = "none";
    prev = 0;
    cartNotification.innerText = prev;
  });
}

// modificar imagenes

let imageContainer = document.querySelector(".galery__image-container");
let imgPrevious = document.querySelector(".galery__previous");
let imgNext = document.querySelector(".galery__next");
let imgIndex = 1;


imgNext.addEventListener("click", () => {
  changeNextImage(imageContainer);
});

imgPrevious.addEventListener("click", () => {
  changePreviousImage(imageContainer);
});

//

let iconModalNav = document.querySelector(".header__menu");
let modalBackground = document.querySelector(".modal-navbar__background");
let closeModalNav = document.querySelector(".modal-navbar__close-icon");

iconModalNav.addEventListener("click", () => {
  modalBackground.style.display == "none" ?  modalBackground.style.display = "block" : modalBackground.style.display = "none";
});

closeModalNav.addEventListener("click", () => {
  modalBackground.style.display == "none" ?  modalBackground.style.display = "block" : modalBackground.style.display = "none";
});

//

let modalBackgroundGalery = document.querySelector(".modal-galery__background");
let iconCloseModal = document.querySelector(".modal-galery__close");

imageContainer.addEventListener("click", () => {
  modalBackgroundGalery.style.display = "grid";
});

iconCloseModal.addEventListener("click", () => {
  console.log("entre");
  modalBackgroundGalery.style.display = "none";
});

// Funciones
//${prev * 125}
//${prev}

function drawProductInModal(){
  if(prev !== 0){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
      <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="cart modal image">
      <div>
      <p class="cart-modal__product">Autum Limited edition...</p>
      <p class="cart-modal__price">$125.00 x${prev} <span>$${prev * 125}.00</span></p>
      </div>
      <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`;
  }else{
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
  }
  deleteProduct();
};

function changeNextImage(imgContainer){
  if(imgIndex < 4){
    imgIndex++;
  }else{
    imgIndex = 1;
  }
  imgContainer.style.backgroundImage = `url('/ecommerce-product-page-main/images/image-product-${imgIndex}.jpg')`
};
function changePreviousImage(imgContainer){
  if(imgIndex <= 1){
    imgIndex = 4;
  }else{
    imgIndex--
  }
  imgContainer.style.backgroundImage = `url('/ecommerce-product-page-main/images/image-product-${imgIndex}.jpg')`
};