import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/ListItem2_elUserPic_268846.png';
import NewFaceRecScreen from './NewFaceRecScreen.js'
import Input from 'muicss/lib/react/input';
import { Button } from 'antd';
import { Modal, message } from 'antd';
import img_deleteIcon from './images/deleteIcon.png'
import axios from 'axios';

export default class FaceList extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);

    this.state = {
      src: '',
      user: '',
      hidden: true
    };

  }



  componentDidMount() {

    console.log('|||FaceList ID Now|||', this.props)
    this.setState({ src: this.props.dataSheetRow.faceData })
    this.setState({ user: this.props.dataSheetRow.userTaged })
    // console.log('|||Get FaceList|||', )
    // var haveFaceKey = "HaveFace"
    // var noFaceKey = "NoFace"



  }

  img_Onclick() {
    console.log('click')
    this.setState({ hidden: !this.state.hidden })

  }


  textInputChanged_field = (event) => {
    
  }

  keyPress(e) {
    if (e.keyCode == 13) {
      console.log('value', e.target.value);
      var value = e.target.value
      if (value.indexOf("@") >= 0) {
        axios.get(`/api/user/checkEmailAvailability?email=${value}`).then(res => {
          console.log('get: ', res)
          if(res.data.available == true){
            //找到此用戶的email，直接標記
            message.success('已將此照片標記為'+ res.data.username)
          }else{
            //此使用者尚未註冊，是否發送邀請?
            //showModel
          }
          
         

        }).catch(function(error) {
          console.log(error)
        });


      }else{
        //用使用者名稱尋找資料庫有無此使用者
        axios.get(`/api/user/checkUsernameAvailability?username=${value}`).then(res => {
          console.log('Check username', res)
        })

      }



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
    const style_img_deleteIcon = {
      height: 'auto',
    };
    return (
      <div className="FaceList" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elRoundimage' style={style_roundimage_outer}>
            {/*(要做的事情) hover至人臉圖上顯示使用者名稱 https://bootstrap.hexschool.com/docs/4.1/components/tooltips/ */}

            {/* 若要更改人臉名稱，按下人臉圖顯示TextField
          https://codepen.io/joshbivens/pen/LNLKor
           */}
            <div style={shown}> </div>
            <Input className="tagfield" type="text" style={hidden} onChange={this.textInputChanged_field} onKeyDown={this.keyPress} ></Input>
            <img style={style_roundimage} src={"data:image/jpeg;base64, " + this.state.src} alt="" onClick={this.img_Onclick.bind(this)} />
            <span className="tooltiptext">{this.state.user}</span>

            <div className='img_deleteIcon' style={style_img_deleteIcon}>
              <img style={style_img_deleteIcon} src={img_deleteIcon} />
            </div>

          </div>




        </div>



      </div >
    )
  }


}
// const ShowTextField = () =>{
//   <Input type="text"/>
// }
