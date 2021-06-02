import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducer from "./reducers";
import App from "./routes/App";
import "./assets/styles/App.css";

const initialState = {
  "search":[],
  "products":[
    {
      "id": "asd121312kkcsdaa",
      "name":"USB",
      "brand":"BLACKPCS",
      "img":"https://www.cyberpuerta.mx/img/product/L/CP-BLACKPCS-MU2102PB-16-2.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Balckpcs 16gb",
      "description": "Memoria Usb con capacidad de almacenar 16gb marca Blackpcs",
      "price": "85$",
      "tags":["MEMORIAS", "16", "USB"]
    },
    {
      "id": "LSDASLDK989",
      "name":"USB",
      "brand":"BLACKPCS",
      "img":"https://phonesale.mx/wp-content/uploads/2019/03/memorias-usb-32gb-metalica-mu2108bl-32-blackpcs-negro-D_NQ_NP_721753-MLM29181177032_012019-F.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Balckpcs 32gb",
      "description": "Memoria Usb con capacidad de almacenar 32gb marca Blackpcs",
      "price": "99$",
      "tags":["MEMORIAS", "32", "USB"]
    },
    {
      "id": "ladcajasdcasi32",
      "name":"USB",
      "brand":"KINGSTON",
      "img":"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/740617297737.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Kingston 32gb",
      "description": "Memoria Usb con capacidad de almacenar 32gb marca Kingston",
      "price": "115$",
      "tags":["MEMORIAS", "32", "USB"]
    },
    {
      "id": "dasjudasd2392",
      "name":"USB",
      "brand":"KINGSTON",
      "img":"https://falabella.scene7.com/is/image/FalabellaPE/16483138_1?wid=800&hei=800&qlt=70",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Kingston 64gb",
      "description": "Memoria Usb con capacidad de almacenar 64gb marca Kingston",
      "price": "200$",
      "tags":["MEMORIAS", "64", "USB"]
    },
    {
      "id": "ASDKASKL239",
      "name":"USB",
      "brand":"SANDISK",
      "img":"https://www.intstore.com.mx/wp-content/uploads/2020/01/SDCZ33-016G-G35-Memoria-USB-SANDISK-16GB-20-CRUZER-FIT-Z33-Negro-Mini2.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Sandisk 16gb",
      "description": "Memoria Usb con capacidad de almacenar 64gb marca Sandisk",
      "price": "110$",
      "tags":["MEMORIAS", "16", "USB"]
    },
    {
      "id": "ASDASKJDJASK923829",
      "name":"USB",
      "brand":"SANDISK",
      "img":"https://www.techinn.com/f/13778/137787745/sandisk-cruzer-fit-32gb-usb-2.0.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Sandisk 32gb",
      "description": "Memoria Usb con capacidad de almacenar 32gb marca Sandisk",
      "price": "125$",
      "tags":["MEMORIAS", "32", "USB"]
    },   {
      "id": "DASKASKDJKAS92382",
      "name":"USB",
      "brand":"SANDISK",
      "img":"https://proingsoft.com/wp-content/uploads/SanDisk-Cruzer-Fit-USB-Drive-without-Cap-SDCZ33-016G-G35-16GB-0619659171780-29012019-01-p.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Sandisk 64gb",
      "description": "Memoria Usb con capacidad de almacenar 64gb marca Sandisk",
      "price": "215$",
      "tags":["MEMORIAS", "64", "USB"]
    },
    {
      "id": "SDMAKSDJAS7",
      "name":"MICRO SD",
      "brand":"BLACKPCS",
      "img":"https://cdn.shopify.com/s/files/1/0254/2144/7246/products/7e0dfeba-9eda-4964-aa02-1b3c41dbc249_3610097e-baaf-41b0-934e-3160b5e3324b_1200x1200.jpg?v=1620939524",
      "type": "MICROSD",
      "class":"MEMORIAS",
      "product": "Memoria Micro SD Blackpcs 16gb",
      "description": "Memoria Micro SD con capacidad de almacenar 16gb marca Blackpcs",
      "price": "80$",
      "tags":["MEMORIAS", "16", "SD", "MICRO", "MICROS"]
    },
    {
      "id": "JASDASK7234",
      "name":"MICRO SD",
      "brand":"KINGSTON",
      "img":"https://cdn.shopify.com/s/files/1/0116/1871/3662/products/I5rkc85VIS.jpg?v=1574225393",
      "type": "MICROSD",
      "class":"MEMORIAS",
      "product": "Memoria Micro SD Kingston 32gb",
      "description": "Memoria Micro SD con capacidad de almacenar 32gb",
      "price": "125$",
      "tags":["MEMORIAS", "32", "SD", "MICRO", "MICROS"]
    },
    {
      "id": "ASASDAS29393D",
      "name":"AUDIFONOS",
      "brand":"GETTECH",
      "img":"https://cdn.shopify.com/s/files/1/2584/5536/products/640_568_-1411c7ab-16f69001261--7dcb3000877015267164620.upload_grande.png?v=1582228887",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Gettech MI-1250R",
      "description": "Audifonos alambricos basicos marca Gettech",
      "price": "69$",
      "tags":["HEADPHONES", "GETTECH"]
    },
    {
      "id": "MASDJASJ32314",
      "name":"AUDIFONOS",
      "brand":"GETTECH",
      "img":"https://images-na.ssl-images-amazon.com/images/I/71MKDwYEIDL._AC_SL1500_.jpg",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Gettech Smoth MI-2140",
      "description": "Audifonos alambricos gama media marca Gettech",
      "price": "89$",
      "tags":["HEADPHONES", "GETTECH"]
    },
    {
      "id": "RD2423ASASKDASDA",
      "name":"AUDIFONOS",
      "brand":"GETTECH",
      "img":"https://http2.mlstatic.com/D_NQ_NP_879346-MLM32082255061_092019-O.jpg",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Gh 2540R",
      "description": "Diadema alambrica gama baja marca gettech",
      "price": "139$",
      "tags":["HEADPHONES", "GETTECH"]
    },
    {
      "id": "MJASDASKD6784",
      "name":"AUDIFONOS",
      "brand":"GETTECH",
      "img":"https://intercompras.com/images/product/GETTTECH_GH-3000N.jpg",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Gh 3000N",
      "description": "Diadema alambrica con microfono gama baja marca gettech",
      "price": "149$",
      "tags":["HEADPHONES", "GETTECH"]
    },
    {
      "id": "SKDFJAKSDA78979",
      "name":"AUDIFONOS",
      "brand":"GETTECH",
      "img":"https://mystore.mx/TIENDAPIXEL-com/mystore/item/5794/bb/diadema-getttech-gh-3500-microfono-negrogris-",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Gh 3500",
      "description": "Diadema alambrica con microfono gama media marca Gettech",
      "price": "175$",
      "tags":["HEADPHONES", "GETTECH"]
    },
    {
      "id": "KASDJAKSDA239",
      "name":"AUDIFONOS",
      "brand":"STYLOS",
      "img":"https://images.squarespace-cdn.com/content/v1/5d1104bb3c53bd0001a91ee7/1616799493418-8U7PJF0FJP4OBC9YAM7N/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS/producto_5059152731_xg.jpg?format=1000w",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Stylos tech 201 Headphones",
      "description": "Diadema alambrica con microfono gama media marca Stylos",
      "price": "179$",
      "tags":["HEADPHONES", "STYLOS"]
    },
    {
      "id": "KASDJAKSDA239",
      "name":"AUDIFONOS",
      "brand":"VORAGO",
      "img":"https://www.voragolive.com/images2/productos/HS-201-BK-01.jpg",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Vorago Headset 201",
      "description": "Diadema alambrica con microfono gama alta marca Vorago",
      "price": "189$",
      "tags":["HEADPHONES", "VORAGO"]
    },
    {
      "id": "ASJDAJSKDJ2873192",
      "name":"AUDIFONOS",
      "brand":"GETTECH",
      "img":"https://todo.cheap/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/a/u/audifonos-diadema-bluetooth-con-microfono-azules-gh-4640n.jpg",
      "type": "AUDIFONOS",
      "class":"HEADPHONES",
      "product": "Gh-4640N Loud",
      "description": "Diadema bluetooth con microfono gama media marca Gettech",
      "price": "249$",
      "tags":["HEADPHONES", "GETTECH"]
    }
  ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(reducer,initialState,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
        <App/>
  </Provider>
    ,
  document.getElementById('root')
);


