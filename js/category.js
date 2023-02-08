fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fang template
  const template = document.querySelector("template").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("a").href = "productlist.html?category=" + cat.category;
  copy.querySelector("a").textContent = cat.category;
  //append
  document.querySelector(".category_list").appendChild(copy);
}
