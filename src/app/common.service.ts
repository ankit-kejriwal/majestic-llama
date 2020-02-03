import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getImageList() {
    const imageList = [
      'https://upload.wikimedia.org/wikipedia/commons/b/b9/Llama_lying_down.jpg',
      'https://www.outtherecolorado.com/wp-content/uploads/2017/03/e9bb2a136a67b3aa4f28fa89ff2e9e1f-1024x897.jpg',
      'https://s.w-x.co/llamablood.jpg',
      'https://res.cloudinary.com/teepublic/image/private/s--ZWgIrrGq--/t_Preview/b_rgb:0f7b47,c_limit,f_jpg,h_630,q_90,w_630/v1541774752/production/designs/3473130_0.jpg',
      'https://previews.123rf.com/images/yuttha/yuttha1811/yuttha181100018/127604349-cute-christmas-llama-.jpg',
      'https://the-hollywood-gossip-res.cloudinary.com/iu/s--XQEwvLvO--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1475858413/paris-jackson-with-a-llama.jpg',
      'https://live.staticflickr.com/104/315768281_903b860cbc_n.jpg',
      'https://i.ytimg.com/vi/OMeonBRZH7I/maxresdefault.jpg',
      'https://linguisticsandbeyond.files.wordpress.com/2011/09/tumblr_libum8wnfj1qhh9hgo1_500.jpeg?w=584',
      'https://i.pinimg.com/originals/3a/f1/49/3af14925cc6b2d96611a22e7181ce929.jpg',
      'https://image.shutterstock.com/image-vector/llama-poster-inscription-sup-means-260nw-1053709733.jpg',
      'https://sayingimages.com/wp-content/uploads/a-friendle-reminder-llama-memes.png',
      'https://i.pinimg.com/originals/76/d3/d5/76d3d564ad5b4c475ecb57de24ebb921.jpg',
      'https://i.pinimg.com/originals/d5/8c/30/d58c3083a58b7301e856bc83b06f548a.jpg',
      'https://i.chzbgr.com/full/272835840/hE7403981/',
      'https://www.memesmonkey.com/images/memesmonkey/41/410dfdb6b3ce79e87f69931fd96b5869.jpeg',
      'https://drwyjmricaxm7.cloudfront.net/blog/wp-content/uploads/2017/05/The-camelids-of-Peru-social-media-blog-image.jpg',
      'https://i.ytimg.com/vi/t_romzZULqs/hqdefault.jpg',
      'https://media.gettyimages.com/photos/white-llama-in-argentina-south-america-salta-province-picture-id154948449?s=2048x2048',
      'https://sayingimages.com/wp-content/uploads/a-friendle-reminder-llama-memes.png',
      'https://i.pinimg.com/originals/c0/55/db/c055db213c1bcabd995e5db9c77dac3c.jpg',
      'https://i.pinimg.com/originals/d3/8e/2c/d38e2c97ece22aafabf03eb2f4685683.jpg',
      'https://i.pinimg.com/originals/e1/17/e4/e117e4bc9e24dfd2ab6b55085c052e49.jpg',
      'https://cdn.shopify.com/s/files/1/1028/7399/products/LLCOOLJTH_grande.jpg?v=1571510085',
      'https://image.shutterstock.com/image-vector/cute-cartoon-llama-vector-design-260nw-794848336.jpg',
      'https://cdn0.wideopenpets.com/wp-content/uploads/2016/04/alpacasllamas.jpg',
      'https://previews.123rf.com/images/worldofvector/worldofvector1811/worldofvector181100205/127474387-merry-christmas-llama-alpaca-baby-face-santa-claus-red-hat-scarf-cute-cartoon-funny-kawaii-character.jpg',
      'https://images.ctfassets.net/cnu0m8re1exe/7JlJ3rqDYnpDN4uNue5Ob5/df297addb82be3a8814267079dc10dcf/29696004_5bc6891117_o.jpg?w=650&h=433&fit=fill',

    ];
    return imageList;
  }

  getVideoList() {
    const videoList = [
      'https://media0.giphy.com/media/zxt9AHjMEOtGM/source.gif',
      'https://media3.giphy.com/media/3o6gb7ttGsXqohupz2/giphy.gif',
      'https://media.giphy.com/media/JdO0Hhia9zcU8/giphy.gif',
      'https://i.pinimg.com/originals/e8/8a/34/e88a34f2db1edc2c26ec36d09f39f4f0.gif',
      'https://media0.giphy.com/media/26AHN1RF9GewMA9Da/giphy.gif',
      'https://media1.giphy.com/media/26tPkf2YDkNjofWxO/giphy.gif',
      'https://media.giphy.com/media/SMBkVjfuRVFhS/giphy.gif',
      'https://i.makeagif.com/media/6-17-2014/Ih3nVG.gif',
      'https://thumbs.gfycat.com/OnlyDisloyalHare-size_restricted.gif',
      'https://media3.giphy.com/media/b6Jt4ckHVgoRq/giphy.gif',
      'https://media1.tenor.com/images/e6cc5e537044d4e8b39210b5de4e8b31/tenor.gif?itemid=8834856',
      'https://media0.giphy.com/media/wJrwNhcMwnCBk1fEEU/giphy.gif',
      'https://media1.giphy.com/media/i68Balzk8Fewg/giphy.gif',
      'https://media1.giphy.com/media/xT1XGDKwOxacd92rYI/giphy.gif',
      'https://media1.giphy.com/media/1081l2F7uGjkK4/giphy.gif',
      'https://media3.giphy.com/media/RzTEfgUMbhjzi/source.gif',
      'https://media3.giphy.com/media/JuvQ6Lh4OiEiQ/giphy.gif',
      'https://media3.giphy.com/media/oaYRBVLTgPtjG/giphy.gif',
      'https://media2.giphy.com/media/d5Iwo02eZiaEE/giphy.gif',
      'https://i.makeagif.com/media/2-06-2016/g-0cw9.gif',
      'https://i.chzbgr.com/full/7762262016/hA43CB4FD/this-is-my-humanget-your-own',
      'https://media3.giphy.com/media/3ohhwmQFwW2xfc4DXq/giphy.gif',
      'https://media0.giphy.com/media/26AHN1RF9GewMA9Da/giphy.gif'
    ];
    return videoList;
  }
}
