import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/ListItem2_elUserPic_268846.png';
import  NewFaceRecScreen from './NewFaceRecScreen.js'
import Input from 'muicss/lib/react/input';
import { Button } from 'antd';
export default class FaceList extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      src:'',
      user:'',
      hidden:true
    };
    
  }

 

  componentDidMount() {
   
    console.log('|||FaceList ID Now|||',  this.props)
    this.setState({src: this.props.dataSheetRow.faceData})
    this.setState({user: this.props.dataSheetRow.userTaged})
    // console.log('|||Get FaceList|||', )
    // var haveFaceKey = "HaveFace"
    // var noFaceKey = "NoFace"

    
    
  }

  img_Onclick(){
   console.log('click')
   this.setState({hidden:!this.state.hidden})

  }


  textInputChanged_field = (event) => {
   console.log('change usertaged:', event.target.value ) 
  }

  keyPress(e){
    if(e.keyCode == 13){
       console.log('value', e.target.value);
       // put the login here
    }
  }



  render() {

    var shown = {
			display: this.state.hidden ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.hidden ? "none" : "block"
    }
    
    // const test = this.changeTestValue()
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_roundimage = {
        height: 'auto',
     };
    const style_roundimage_outer = {
        pointerEvents: '',
     };
    const Tag = {

    }
    return (
      <div className="FaceList" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elRoundimage' style={style_roundimage_outer}>
          {/*(要做的事情) hover至人臉圖上顯示使用者名稱 https://bootstrap.hexschool.com/docs/4.1/components/tooltips/ */}

          {/* 若要更改人臉名稱，按下人臉圖顯示TextField
          https://codepen.io/joshbivens/pen/LNLKor
           */}
            <div style={ shown }> </div>
				    <Input type="text" style={ hidden }  onChange={this.textInputChanged_field} onKeyDown={this.keyPress} ></Input>
            <img style={style_roundimage} src={"data:image/jpeg;base64, " + this.state.src} alt=""  onClick={this.img_Onclick.bind(this)}/>
            <span className="tooltiptext">{this.state.user}</span>
          </div>
    
         
     
        </div>

         

      </div>
    )
  }
  

}
// const ShowTextField = () =>{
//   <Input type="text"/>
// }
