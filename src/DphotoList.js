import React, { Component } from 'react';
import './App.css';
import img_elGroupPhoto from './images/DphotoList_elGroupPhoto_205875.jpg';


export default class DphotoList extends Component {

 
   
 componentDidMount(){
   
 }






  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_groupPhoto = {
        height: 'auto',
     };
    const style_groupPhoto_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="DphotoList" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elGroupPhoto' style={style_groupPhoto_outer}>
            <img style={style_groupPhoto} src={img_elGroupPhoto} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
