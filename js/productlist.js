const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=20`)
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#firstView_product_template").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".current_price").textContent = `DKK ${product.price},-`;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);

  //onSale
  /* if (product.onsale) {
    copy.querySelector("article").classList.add("onSale");
    // copy.querySelector("article").classList.add("discount_tag");
    // copy.querySelector("article").classList.add("current_price");
    copy.querySelector("p.discount").textContent = `"-" ${product.discount}`;
    console.log("added discount");
  } else {
    //copy.querySelector("article").remove("onSale");
    copy.querySelector("article").classList.add("firstview_product");
  } */

  // soldOut
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
    console.log("added soldout");
  }

  //   if (product.soldout) {
  //     copy.querySelector("#status").classList.add(".soldout");
  //   }
  //append
  document.querySelector(".list_grid").appendChild(copy);
}
