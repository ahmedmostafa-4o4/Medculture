const imgInput = document.getElementById("product-img");
const nameInput = document.getElementById("product-name");
const descriptionInput = document.getElementById("product-description");
const productForm = document.getElementById("product-inputs");

productForm.addEventListener("submit", function () {
  localStorage.setItem(
    `Product Image no.${localStorage.length}`,
    `${imgInput.files[0].name}`
  );
  localStorage.setItem(
    `Product Name no.${localStorage.length}`,
    `${nameInput.value}`
  );
  localStorage.setItem(
    `Product Description no.${localStorage.length}`,
    `${descriptionInput.value}`
  );
});
