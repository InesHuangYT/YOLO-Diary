import React, { Component } from 'react';
import './App.css';
import img_el03 from './images/03.jpg';


export default class ListPic extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_03 = {
        height: 'auto',
     };
    const style_03_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListPic" style={baseStyle}>
        <div className="layoutFlow">
          <div className='el03' style={style_03_outer}>
            <img style={style_03} src={img_el03} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
