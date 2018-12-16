import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/ListItem2_elUserPic_268846.png';
import NewFaceRecScreen from './NewFaceRecScreen.js'
import Input from 'muicss/lib/react/input';
import { Button } from 'antd';
import { Modal, message, notification } from 'antd';
import 'antd/dist/antd.css';
import img_deleteIcon from './images/deleteIcon.png'
import axios from 'axios';

export default class FaceList extends Component {

  // This component doesn't use any properties


  constructor(props) {
    super(props);

    this.state = {
      src: '',
      user: '',
      hidden: true,
      value: '',
      emailNotFound_visible: false,
      usernameNotFound_visible: false,
      catchEmail: '',

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


  // https://reactjs.org/docs/handling-events.html(看第6張圖)
  // 
  keyPress = (e) => {
    if (e.keyCode == 13) {

      console.log('value', e.target.value);
      this.setState({ value: e.target.value })

      var value = e.target.value
      if (value.indexOf("@") >= 0) {
        axios.get(`/api/user/checkEmailAvailability?email=${value}`).then(res => {
          console.log('get: ', res)
          if (res.data.available == true) {
            //找到此用戶的email，直接標記
            //後端訓練
            const data = {
              data: this.props.dataSheetRow.faceData
            }
            axios.post(`/api/selfie/trainFacePhoto?username=${res.data.username}`, data).then(res => {
              console.log('<TRAIN by Email>')
            })
            message.success('已將此照片標記為' + res.data.username)
          } else {
            //此使用者尚未註冊，是否發送邀請?
            //showModel
            this.show_emailNotFound_Modal()


          }



        }).catch(function (error) {
          console.log(error)
        });


      } else {
        //用使用者名稱尋找資料庫有無此使用者
        axios.get(`/api/user/checkUsernameAvailability?username=${value}`).then(res => {
          console.log('Check username', res)
          if (res.data.available == true) {

            const data = {
              data: this.props.dataSheetRow.faceData
            }
            axios.post(`/api/selfie/trainFacePhoto?username=${value}`, data).then(res => {
              console.log('<TRAIN by Username>')
            })

            message.success('已將此照片標記為' + value)


          } else {
            this.show_usernameNotFound_Modal()
          }
        })

      }



    }


  }

  show_emailNotFound_Modal = () => {
    this.setState({
      emailNotFound_visible: true,
    });
  }

  emailNotFound_handleOk = (e) => {
    //寄送邀請
    axios.post(`/api/engineTag/sendEmail?email=${this.state.value}`).then(res => {
      console.log('send invitation res->', res)
    })
    this.setState({
      emailNotFound_visible: false,
    });
    message.success('寄送邀請成功')
  }

  emailNotFound_handleCancel = (e) => {

    this.setState({
      emailNotFound_visible: false,
    });
  }


  show_usernameNotFound_Modal = () => {
    this.setState({
      usernameNotFound_visible: true,
    });
  }

  usernameNotFound_handleOk = (e) => {
    //寄送邀請
    if (this.state.catchEmail.indexOf("@") >= 0) {

      axios.post(`/api/engineTag/sendEmail?email=${this.state.catchEmail}`).then(res => {
        console.log('send invitation res->', res)
      })

      this.setState({
        usernameNotFound_visible: false,
      });
      message.success('寄送邀請成功')
    } else {
      message.error('信箱輸入錯誤')
    }

  }

  usernameNotFound_handleCancel = (e) => {

    this.setState({
      usernameNotFound_visible: false,
    });
  }

  enterEmail = (e) => {

    this.setState({ catchEmail: e.target.value })

  }


  render() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };

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


    const textStyle = {
      textAlign: 'center',
    }

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
            <Input className="tagfield" type="text" style={hidden} onChange={this.textInputChanged_field} onKeyDown={this.keyPress} >
            </Input>

            <Modal title="找不到此信箱" visible={this.state.emailNotFound_visible} onOk={this.emailNotFound_handleOk} onCancel={this.emailNotFound_handleCancel} width='350px'>
              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <div style={textStyle} >
                此用戶尚未註冊，是否發送邀請到此email?
         </div>
              <div className="w3-row w3-section">
                <div className="w3-col" style={{ width: '50px' }}><i className="w3-xxlarge fa fa-envelope-o"></i></div>
                <div className="w3-rest">
                  <input className="w3-input w3-border" name="email" type="text" placeholder="Enter Email" defaultValue={this.state.value} />
                </div>
              </div>

            </Modal>

            <Modal title="找不到此用戶" visible={this.state.usernameNotFound_visible} onOk={this.usernameNotFound_handleOk} onCancel={this.usernameNotFound_handleCancel} width='350px'>
              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <div style={textStyle} >
                此用戶尚未註冊<br />
                在下方輸入好友的email即可邀請對方來使用YOLO日記!
         </div>
              <div className="w3-row w3-section">
                <div className="w3-col" style={{ width: '50px' }}><i className="w3-xxlarge fa fa-envelope-o"></i></div>
                <div className="w3-rest">
                  <input className="w3-input w3-border" name="email" type="text" placeholder="Enter Email" onChange={this.enterEmail} />
                </div>
              </div>

            </Modal>

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
