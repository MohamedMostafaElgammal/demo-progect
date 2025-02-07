import { Data } from "@angular/router";

export interface Iproduct {
    sold:number;
    images:string[];
    subcategory : string[];
    ratingsQuantity:number;
    _id: string;
    title:string;
     name:string;
    slug:string;
    description:string;
    quantity:number;
    price: number;
    imageCover:string;
    category: string;
    brand:string;
    ratingsAverage:number;
    createdAt:Data;
    updatedAt:Data;
    id:string;
}
   
//     category: {
//       _id: '6439d5b90049ad0b52b90048',
//       name: "Men's Fashion",
//       slug: "men's-fashion",
//       image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511865180.jpeg'
//     },
//     brand: {
//       _id: '64089c3924b25627a2531593',
//       name: 'Adidas',
//       slug: 'adidas',
//       image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285881943.png'
//     },
//     ratingsAverage: 3.8,
//     createdAt: '2023-04-02T00:20:56.323Z',
//     updatedAt: '2025-02-04T02:43:15.306Z',
//     id: '6428ca68dc1175abc65ca02b'
//   },
// }
