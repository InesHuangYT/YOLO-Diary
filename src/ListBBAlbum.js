import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/ListBBAlbum_elImage_653766.jpg';


export default class ListBBAlbum extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_image = {
        height: 'auto',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListBBAlbum" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elImage' style={style_image_outer}>
            <img style={style_image} src={img_elImage} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
