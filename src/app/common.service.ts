import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getImageList() {
    const imageList = [
      'https://upload.wikimedia.org/wikipedia/commons/b/b9/Llama_lying_down.jpg',
      'https://media0.giphy.com/media/zxt9AHjMEOtGM/source.gif',
      'https://www.outtherecolorado.com/wp-content/uploads/2017/03/e9bb2a136a67b3aa4f28fa89ff2e9e1f-1024x897.jpg',
      'https://s.w-x.co/llamablood.jpg',
      'https://media3.giphy.com/media/3o6gb7ttGsXqohupz2/giphy.gif',
      'https://media0.giphy.com/media/26AHN1RF9GewMA9Da/giphy.gif',
      'https://media.giphy.com/media/SMBkVjfuRVFhS/giphy.gif',
      'https://media1.tenor.com/images/e6cc5e537044d4e8b39210b5de4e8b31/tenor.gif?itemid=8834856',
      'https://media0.giphy.com/media/wJrwNhcMwnCBk1fEEU/giphy.gif',
      'https://media1.giphy.com/media/i68Balzk8Fewg/giphy.gif',
      'https://media1.giphy.com/media/xT1XGDKwOxacd92rYI/giphy.gif',
      'https://sayingimages.com/wp-content/uploads/a-friendle-reminder-llama-memes.png',
      'https://i.pinimg.com/originals/c0/55/db/c055db213c1bcabd995e5db9c77dac3c.jpg',
      'https://media1.giphy.com/media/1081l2F7uGjkK4/giphy.gif',
      'https://media3.giphy.com/media/RzTEfgUMbhjzi/source.gif',
      'https://i.pinimg.com/originals/e1/17/e4/e117e4bc9e24dfd2ab6b55085c052e49.jpg',
      'https://cdn.shopify.com/s/files/1/1028/7399/products/LLCOOLJTH_grande.jpg?v=1571510085',

      'https://image.shutterstock.com/image-vector/cute-cartoon-llama-vector-design-260nw-794848336.jpg',
      'https://cdn0.wideopenpets.com/wp-content/uploads/2016/04/alpacasllamas.jpg',
      'https://images.ctfassets.net/cnu0m8re1exe/7JlJ3rqDYnpDN4uNue5Ob5/df297addb82be3a8814267079dc10dcf/29696004_5bc6891117_o.jpg?w=650&h=433&fit=fill',

    ];
    return imageList;
  }
}
