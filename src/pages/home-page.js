import {getProducts} from '../api/index';
const HomePage = {
  render: async () => {

    const products = await getProducts();

    if (products.error) {
      return `<div class="error">${product.error}</div>`;
    }
    return `
     <ul class="products">
      ${ products.map(product => `
        <li>
          <div class="product">
            <a href="/#/product/${product.id}">
              <img src="${product.image}" alt="${product.name}"
            </a>
          </div>
        </li>
      `).join("\n")}
     </ul>
    `
  }
}

export default HomePage;