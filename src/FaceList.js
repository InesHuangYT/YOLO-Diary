import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/ListItem2_elUserPic_268846.png';


export default class FaceList extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      src:''
    };
  }



  componentDidMount() {
    console.log('|||Get FaceList|||',  this.props.appActions.getDataSheet('faceListData'))
    // var haveFaceKey = "HaveFace"
    // var noFaceKey = "NoFace"

    
    
  }
 

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_roundimage = {
        height: 'auto',
     };
    const style_roundimage_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="FaceList" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elRoundimage' style={style_roundimage_outer}>
            <img style={style_roundimage} src={img_elRoundimage} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
