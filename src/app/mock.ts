import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IWeather {
   title: string;
   icon: string;
   water: number;
   temperature: number;
}

export interface ISocial {
   title: string;
   img: string;
   followers: number;
   following: number;
}

export interface IHotel {
      img: string;
      address: string;
      phone: number;   // дополнительно задание pipe для форматирования
      weather: IWeather;
      social_info: ISocial;
      type: string;
}

export const hotels: IHotel[] = [
  {
    img: 'https://i.ytimg.com/vi/dqZko3H7lm8/maxresdefault.jpg',
    address: 'Romania',
    phone:  +36272389845,   // дополнительно задание pipe для форматирования
    weather: {
       title: 'Bucharest, Romania',
       icon: 'assets/images/...',
       water: 25,
       temperature: 28
    },
    social_info: {
       title: 'Ibis',
       img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/3d/ce/b1/ibis-budget-madrid-getafe.jpg',
       followers: 1854,
       following: 554
    },
    type: '****'
  },
  {
    img: 'http://ekonomia-ks.com/repository/images/main/Bregdeti_i_Koracise.jpg',
    address: 'Bulgaria',
    phone:  +48254363500,   // дополнительно задание pipe для форматирования
    weather: {
       title: 'Varna, Bulgaria',
       icon: 'assets/images/...',
       water: 23,
       temperature: 27
    },
    social_info: {
       title: 'Continental',
       img: 'https://media.newmindmedia.com/TellUs/image/?file=58EAFB79EFB81010D85EA61A6E84C090198752D8.jpg&dh=533&dw=800',
       followers: 2411,
       following: 988
    },
    type: '*****'
  },
  {
    img: 'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/austria/Austria_NationalGeographic_2618017.ngsversion.1501174663803.adapt.1900.1.jpg',
    address: 'Austria',
    phone:  +35659897121,   // дополнительно задание pipe для форматирования
    weather: {
       title: 'Vena, Austria',
       icon: 'assets/images/...',
       water: 21,
       temperature: 26
    },
    social_info: {
       title: 'Atlantic',
       img: 'https://assets.ahgz.de/media/news/article/127560/neue-plaene-das-atlantic-kempinski-hamburg-hat-ein.jpg',
       followers: 241,
       following: 544
    },
    type: '***'
  }
];

export const hotels$: Observable<IHotel[]> = of(hotels);
