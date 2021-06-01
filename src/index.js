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
      "img":"https://www.radioshack.com.mx/medias/67221.gif-1200ftw?context=bWFzdGVyfHJvb3R8MTI2NTg0fGltYWdlL2dpZnxoOGUvaGQ3Lzg3OTY1OTMyMjU3NTguZ2lmfDQzYWQ2ODk2NDc0ODBmYzU3NWMwNTYzNDQ4MThhMjdhNGY1MGFhMjI0NzZkMjMwYjJiYmE1YmNkMjM1MDg3YzE",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Sandisk 16gb",
      "description": "Memoria Usb con capacidad de almacenar 16gb",
      "price": "129$",
      "tags":["MEMORIAS", "32", "USB"]
    },
    {
      "id": "sjdjcs288r8ni",
      "name":"USB",
      "img":"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659171797.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Sandisk 32gb",
      "description": "Memoria Usb con capacidad de almacenar 32gb",
      "price": "139$",
      "tags":["MEMORIAS", "32", "USB"]
    },
    {
      "id": "ladcajasdcasi32",
      "name":"USB",
      "img":"https://i.linio.com/p/4ac4ce1189821de6a8ac01af37ab3d29-product.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Sandisk 64gb",
      "description": "Memoria Usb con capacidad de almacenar 64gb",
      "price": "150$",
      "tags":["MEMORIAS", "64", "USB"]
    },
    {
      "id": "sadsadasjdasjd342734293",
      "name":"USB",
      "img":"https://www.intstore.com.mx/wp-content/uploads/2020/01/sandisk-128gb-cruzer-blade-usb-memory-stick-sdcz50-128g-b35.jpg",
      "type": "USB",
      "class":"MEMORIAS",
      "product": "Memoria Usb Sandisk 128gb",
      "description": "Memoria Usb con capacidad de almacenar 128gb",
      "price": "259$",
      "tags":["MEMORIAS", "128", "USB"]
    },
    {
      "id": "jsdnadvas323",
      "name":"MICRO SD",
      "img":"https://resources.claroshop.com/medios-plazavip/mkt/5d5e9ecf5f188_5jpg.jpg",
      "type": "MICROSD",
      "class":"MEMORIAS",
      "product": "Memoria Micro SD Sandisk 16gb",
      "description": "Memoria Micro SD con capacidad de almacenar 16gb",
      "price": "150$",
      "tags":["MEMORIAS", "16", "SD", "MICRO", "MICROS"]
    },
    {
      "id": "U23JR00KFR99",
      "name":"MICRO SD",
      "img":"http://www.s-tech.com.pe/wp-content/uploads/2018/02/SANDISK_Ultra_microSDHC_UHS-I_Class10_32GB-300x300.png",
      "type": "MICROSD",
      "class":"MEMORIAS",
      "product": "Memoria Micro SD Sandisk 32gb",
      "description": "Memoria Micro SD con capacidad de almacenar 32gb",
      "price": "150$",
      "tags":["MEMORIAS", "32", "SD", "MICRO", "MICROS"]
    },
    {
      "id": "SDMAKSDJAS7",
      "name":"MICRO SD",
      "img":"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659134846.jpg",
      "type": "MICROSD",
      "class":"MEMORIAS",
      "product": "Memoria Micro SD Sandisk 64gb",
      "description": "Memoria Micro SD con capacidad de almacenar 64gb",
      "price": "150$",
      "tags":["MEMORIAS", "64", "SD", "MICRO", "MICROS"]
    },
    {
      "id": "JASDASK7234",
      "name":"MICRO SD",
      "img":"http://www.s-tech.com.pe/wp-content/uploads/2018/11/SDSQUAR-128G-GN6MA_1-300x300.jpg",
      "type": "MICROSD",
      "class":"MEMORIAS",
      "product": "Memoria Micro SD Sandisk 128gb",
      "description": "Memoria Micro SD con capacidad de almacenar 128gb",
      "price": "180$",
      "tags":["MEMORIAS", "128", "SD", "MICRO", "MICROS"]
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


