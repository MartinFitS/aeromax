import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducer from "./reducers";
import App from "./routes/App";
import "./assets/styles/App.css";

const initialState = {
  "products":[
    {
      "id": "asd121312kkcsdaa",
      "img":"https://www.radioshack.com.mx/medias/67221.gif-1200ftw?context=bWFzdGVyfHJvb3R8MTI2NTg0fGltYWdlL2dpZnxoOGUvaGQ3Lzg3OTY1OTMyMjU3NTguZ2lmfDQzYWQ2ODk2NDc0ODBmYzU3NWMwNTYzNDQ4MThhMjdhNGY1MGFhMjI0NzZkMjMwYjJiYmE1YmNkMjM1MDg3YzE",
      "type": "USB",
      "product": "Memoria Usb Sandisk 16gb",
      "description": "Memoria Usb con capacidad de almacenar 16gb",
      "price": "129$"
    },
    {
      "id": "sjdjcs288r8ni",
      "img":"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659171797.jpg",
      "type": "USB",
      "product": "Memoria Usb Sandisk 32gb",
      "description": "Memoria Usb con capacidad de almacenar 32gb",
      "price": "139$"
    },
    {
      "id": "ladcajasdcasi32",
      "img":"https://i.linio.com/p/4ac4ce1189821de6a8ac01af37ab3d29-product.jpg",
      "type": "USB",
      "product": "Memoria Usb Sandisk 64gb",
      "description": "Memoria Usb con capacidad de almacenar 64gb",
      "price": "150$"
    },
    {
      "id": "sadsadasjdasjd342734293",
      "img":"https://www.intstore.com.mx/wp-content/uploads/2020/01/sandisk-128gb-cruzer-blade-usb-memory-stick-sdcz50-128g-b35.jpg",
      "type": "USB",
      "product": "Memoria Usb Sandisk 128gb",
      "description": "Memoria Usb con capacidad de almacenar 128gb",
      "price": "259$"
    },
    {
      "id": "jsdnadvas323",
      "img":"https://resources.claroshop.com/medios-plazavip/mkt/5d5e9ecf5f188_5jpg.jpg",
      "type": "MICRO SD",
      "product": "Memoria Micro SD Sandisk 16gb",
      "description": "Memoria Micro SD con capacidad de almacenar 16gb",
      "price": "150$"
    },
    {
      "id": "U23JR00KFR99",
      "img":"http://www.s-tech.com.pe/wp-content/uploads/2018/02/SANDISK_Ultra_microSDHC_UHS-I_Class10_32GB-300x300.png",
      "type": "MICRO SD",
      "product": "Memoria Micro SD Sandisk 32gb",
      "description": "Memoria Micro SD con capacidad de almacenar 32gb",
      "price": "150$"
    },
    {
      "id": "JASDASK7234",
      "img":"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659134846.jpg",
      "type": "MICRO SD",
      "product": "Memoria Micro SD Sandisk 64gb",
      "description": "Memoria Micro SD con capacidad de almacenar 64gb",
      "price": "150$"
    },
    {
      "id": "JASDASK7234",
      "img":"http://www.s-tech.com.pe/wp-content/uploads/2018/11/SDSQUAR-128G-GN6MA_1-300x300.jpg",
      "type": "MICRO SD",
      "product": "Memoria Micro SD Sandisk 128gb",
      "description": "Memoria Micro SD con capacidad de almacenar 128gb",
      "price": "150$"
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


