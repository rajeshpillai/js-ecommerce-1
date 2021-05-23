import Header from './components/header';
import HomePage from './pages/home-page';
import ProductPage from './pages/product-page';
import {getUrlRequest} from './utils';

const root = document.querySelector("#root");
const header = document.querySelector("#header");

const routes= {
  '/': HomePage,
  '/product/:id': ProductPage
}

async function router() {
  const request = getUrlRequest();

  const parseUrl = 
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? "/:id" : '')  +
    (request.verb ? `/${request.verb}` : '');

  console.log(parseUrl);

  const page = routes[parseUrl];

  root.innerHTML =  await page.render();
  // root.innerHTML = await ProductPage.render();
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
