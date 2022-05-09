//import React from 'react';
//import Image from 'next/image'


export default function CardPortafolio(props){

  // console.log("props id:", props.id);
  // console.log("props:", props);

  // console.log("props id :", props.data);
  // const laData = props.data;
  // console.log("laData:", laData);

  const { id, titulo, texto, txt_extra, imagen} = props.id?props:{id:null, titulo:null, texto:null, txt_extra:null, imagen:null};
   // const id  = props.data.id;
  // console.log("titulo:", titulo);

  if(props.id){
    return(
      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className="card card-info shadow p-3 mb-5 bg-body rounded">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{texto}</p>
            <p className="card-text">
              <small className="text-muted">{txt_extra}</small>
            </p>
          </div>
          <img src={imagen} className="card-img-bottom" alt={titulo} />
        </div>
      </div>
    )
  }else{
    return null;
  }
}
