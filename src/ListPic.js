import React, { Component } from 'react';
import './App.css';
import DataSheetBase from './DataSheetBase.js';
import img_el03 from './images/03.jpg';
import axios from 'axios';

export default class ListPic extends DataSheetBase {



  constructor(props) {
    super(props)

    this.state = {
      src: ''


    }
  }
  showModal = () => {
    document.getElementById("modal01").style.display = 'block';
  }
  closeModal = () => {
    document.getElementById("modal01").style.display = 'none';
  }

  componentDidMount() {

    let _this = this


    console.log('picture Check---------->', this.props)
    _this.setState({ src: this.props.dataSheetRow.photo })

  }








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
          <div className='el03' >
          <div className='pic1'>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" multiple={true}></link>
          
            <img  src={"data:image/jpeg;base64, " + this.state.src} alt="" key={this.props.dataSheetRow.key} onClick={this.showModal}/>
           </div>
            
            <div id="modal01" className="w3-modal" onClick={this.closeModal}  >

              <div className="w3-modal-content w3-animate-zoom" >

                <img src={"data:image/jpeg;base64, " + this.state.src} alt="" key={this.props.dataSheetRow.key} style={{ width: "100%" }} />

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }


}
