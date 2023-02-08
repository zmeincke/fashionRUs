//https://kea-alt-del.dk/t7/api/products/2010
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".product_show h1").textContent = product.productdisplayname;
  document.querySelector("span.brandname").textContent = product.brandname;
  document.querySelector("span.category").textContent = product.category;
  document.querySelector("span.articletype").textContent = product.articletype;
  document.querySelector(".product_show img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

/*id	2010
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
basecolour	"Green"
season	"Fall"
productionyear	2010
usagetype	"Sports"
productdisplayname	"s Classic Green Polo T-shirt"
parsed	1
soldout	1
relid	2010
price	1499
discount	54
variantname	"CL SS STR   WonderBuz"
brandname	"ADIDAS"
brandbio	null
brandimage	"http://assets.myntassets.com/assets/images/2015/9/30/11443602768501-27962-8wd2nz.jpg"
agegroup	"Adults-Men"
colour1	""
colour2	""
fashiontype	"Fashion"
materialcaredesc	null
sizefitdesc	null
description	"<p>This is a classic stripped polo t-shirt from adidas for regular wear.<br /><br /><em>Model statistics<br /></em>The model wears size M in t-shirts<br />Height-5.11\", Shoulders-17.5\"</p>"
styledesc	null*/
