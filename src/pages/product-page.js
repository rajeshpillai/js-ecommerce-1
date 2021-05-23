import {getProduct} from '../api/index';
import {getUrlRequest} from '../utils';

const ProductPage = {
  render: async () => {
    const request = getUrlRequest();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }

    return `
      <div class="content">
        <div class="back-to-result">
         <a href="/#/">Back to result </a>
        </div>
        <div class="product-details">
          <div class="product-image">
             <img src="${product.image}" alt="${product.title}" />
          </div>
          <div class="details-info">
          <ul>
            <li>
              <h1>${product.title}</h1>
            </li>
            <li>
           
            </li>
            <li>
              Price: <strong>$${product.price}</strong>
            </li>
            <li>
              Description:
              <div>
                ${product.description}
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    `
  }
    
}

export default ProductPage;