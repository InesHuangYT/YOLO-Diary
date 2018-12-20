import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_53437.jpg';
import NavBar from './NavBar';
import Addbubble from './Addbubble';
import ListItem1 from './ListItem1';
import DataSheet_listData1 from './DataSheet_listData1.js'
// import Axios from 'axios'
import { Select } from 'antd';
import {
  Icon, Button, Input, AutoComplete,
} from 'antd';
// UI framework component imports
// import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
// import store from './store';
import axios from 'axios';
import { error } from 'util';



// const Option = AutoComplete.Option;

// function onSelect(value) {
//   console.log('onSelect', value);
// }

// function getRandomInt(max, min = 0) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
// }

// function searchResult(query) {
//   return (new Array(getRandomInt(5))).join('.').split('.')
//     .map((item, idx) => ({
//       query,
//       category: `${query}${idx}`,
//       count: getRandomInt(200, 100),
//     }));
// }

// function renderOption(item) {
//   return (
//     <Option key={item.category} text={item.category}>
//       {item.query} 在
//       <a
//         href={`https://s.taobao.com/search?q=${item.query}`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {item.category}
//       </a>
//       區塊中
//       <span className="global-search-item-count">约 {item.count} 個结果</span>
//     </Option>
//   );
// }


export default class NewBubbleDiaryScreen extends Component {


  constructor(props) {
    super(props);


    this.state = {
      dataSource: [],
      keyword: '',

    }
  }

  // handleSearch = (value) => {
  //   this.setState({
  //     dataSource: value ? searchResult(value) : [],
  //   });
  // }
  // Properties used by this component:
  // appActions, deviceInfo, fieldtitle, textcontent

  componentDidMount() {



    console.log('Home page props', this.props)

    console.log('listdata1 Mount', this.props)

    let item;

    axios.get(`/api/album/allAlbums`).then(res => {

      //console.log('albums ->',res)

      var elements = res.data.length
      for (var i = 0; i < elements; i++) {

        item = {};
        //相簿名稱

        item['albumName'] = res.data[i].name;
        item['albumId'] = res.data[i].id;
        // item['diaryId'] = [];
        item['photoCover'] = res.data[i].photoCover;
        item['albumCreatedAt'] = res.data[i].createdAt;
        item['message'] = res.data[i].message;


        // for(var j = 0; j < res.data[i].diaries.length ; j++){
        // console.log('check did->',res.data[i].diaries[j].id)
        // item['diaryId'].push({id: res.data[i].diaries[j].id}) 
        // }

        item.key = Math.random() * (1000);

        this.sendData_to_listData1(item.albumName, item.albumId, item.photoCover, item.albumCreatedAt,item.message, item.key)

      }
      this.setState({ albumItem: this.props.appActions.getDataSheet('listData1').items })
      console.log('state albumitem>>>', this.state.albumItem)
    })

    // console.log('check datasheet ', this.props.appActions.getDataSheet('listData1'))
    // this.Delete_listData()
    // console.log('check datasheet after>', this.props.appActions.getDataSheet('listData1'))

  }

  componentWillUnmount() {


    console.log('comWillUnMount')
    this.Delete_listData()
    console.log('check datasheet delete', this.props.appActions.getDataSheet('listData1'))

  }


  Delete_listData = () => {
    const length = this.props.appActions.getDataSheet('listData1').items.length
    for (var i = 0; i < length; i++) {
      // console.log('print i:', i)
      this.props.appActions.removeFromDataSheet('listData1', this.props.appActions.getDataSheet('listData1').items[0])
    }
    // console.log('show sheetdata',  this.props.appActions.getDataSheet('listUserBubble'))


  }




  sendData_to_listData1 = (albumName, albumId, photoCover, albumCreatedAt,message, key) => {
    const dataSheet = this.props.appActions.getDataSheet('listData1');

    let row = this.props.dataSheetRow || {
    };
    row = {

      albumName: albumName,
      albumId: albumId,
      photoCover: photoCover,
      albumCreatedAt: albumCreatedAt,
      message: message,
      key: key

    };
    console.log('props dataId>>>', this.props.dataSheetId)
    if (this.props.dataSheetId === dataSheet.id) {
      console.log('<<<<UPDATE>>>>')
      this.props.appActions.updateInDataSheet('listData1', row);
    } else {

      this.props.appActions.addToDataSheet('listData1', row);
    }
  }



  handleTimeClick(clickWhat, WhichUri) {
    console.log('Click' + clickWhat)
    this.Delete_listData()

    let item;
    axios.get(`/api/album/${WhichUri}`).then(res => {

      var elements = res.data.length
      for (var i = 0; i < elements; i++) {

        item = {};
        //相簿名稱

        item['albumName'] = res.data[i].name;
        item['albumId'] = res.data[i].id;
        item['photoCover'] = res.data[i].photoCover;
        item['albumCreatedAt'] = res.data[i].createdAt;
        item['message'] = res.data[i].message;

        item.key = Math.random() * (1000);

        this.sendData_to_listData1(item.albumName, item.albumId, item.photoCover, item.albumCreatedAt,item.message, item.key)

      }


      console.log(clickWhat + '>>>', this.props.appActions.getDataSheet('listData1'))


    }).catch(function (error) {
      console.log(error)
    })
  }


  SearchKeyWord = (e) => {

    this.setState({ keyword: e.target.value })
    console.log('key word', e.target.value)
    console.log('key word>', this.state.keyword)

  }

  Search = (e) => {
    console.log('Click Search', this.state.keyword)
    this.Delete_listData()

    let item;

    if (this.state.keyword) {
      axios.get(`/api/album/findAlbum?albumName=${this.state.keyword}`).then(res => {

        var elements = res.data.length
        for (var i = 0; i < elements; i++) {

          item = {};
          //相簿名稱

          item['albumName'] = res.data[i].name;
          item['albumId'] = res.data[i].id;
          item['photoCover'] = res.data[i].photoCover;
          item['albumCreatedAt'] = res.data[i].createdAt;
          item['message'] = res.data[i].message;

          item.key = Math.random() * (1000);

          this.sendData_to_listData1(item.albumName, item.albumId, item.photoCover, item.albumCreatedAt,item.message, item.key)

        }


        console.log('Search>>>', this.props.appActions.getDataSheet('listData1'))




      }).catch(function (error) {
        console.log(error)
      })
    }

  }

  onSelect(value) {
    console.log('onSelect', value);
  }

  render() {

    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out ' + this.props.transitionId;
    }
    if (!this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }

    // const dataSheet_listData1 = this.props.dataSheets['listData1'];
    const style_background = {
      width: '100%',
      height: '100%',
    };
    const style_background_outer = {
      backgroundColor: '#feffff',
      pointerEvents: 'none',
    };
    const style_bubbleDiaryBG = {
      backgroundImage: 'url(' + img_elBubbleDiaryBG + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      pointerEvents: 'none',
    };
    const style_list = {
      height: 'auto',  // This element is in scroll flow
    };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};

    listComps_list['_head'] = <Addbubble appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Head item for this list
    items_list.push({ key: '_head', _componentId: '_head' });  // A data item to indicate the head item

    items_list = items_list.concat(this.props.appActions.getDataSheet('listData1').items);

    // const style_button_delete = {
    //   display: 'block',
    //   textAlign: 'center',
    // };
    // const style_button_delete_outer = {
    //   cursor: 'pointer',
    // };
    // const style_button_update = {
    //   display: 'block',
    //   textAlign: 'center',
    // };
    // const style_button_update_outer = {
    //   cursor: 'pointer',
    // };
    const style_button_week = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_week_outer = {
      cursor: 'pointer',
    };
    const style_button_month = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_month_outer = {
      cursor: 'pointer',
    };
    const style_button_year = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_year_outer = {
      cursor: 'pointer',
    };
    const { dataSource } = this.state;

    const inputStyle = {
      height: '40px',
      width: '250px',
      left:'300px',
      top:'55px'
    }
    const buttonStyle ={
      top:'55px',
      left:'300px'
    }

    
    return (
      <Container fluid={true} className="AppScreen NewBubbleDiaryScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />

          </div>

          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavBar2'>
            <div>
              <NavBar appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>

          </div>

          {/* <div >
            <Input className='inputstyle' style={inputStyle}/>
            <Button className="btn" size="large" type="primary" style={buttonStyle} >
                  <Icon type="search" />
                </Button>
          </div> */}

          <div className='actionFont elButton_all' style={style_button_week_outer}>
            <Button style={style_button_week} color="accent" onClick={this.handleTimeClick.bind(this, 'All', 'allAlbums')}>
              {"全部"}
            </Button>
          </div>

          <div className='actionFont elButton_week' style={style_button_week_outer}>
            <Button style={style_button_week} color="accent" onClick={this.handleTimeClick.bind(this, 'Week', 'findAlbumByWeek')}>
              {"一星期內"}
            </Button>
          </div>

          <div className='actionFont elButton_month' style={style_button_month_outer}>
            <Button style={style_button_month} type="button" color="accent" onClick={this.handleTimeClick.bind(this, 'Month', 'findAlbumByMonth')}>
              一個月內
            </Button>

          </div>

          <div className='actionFont elButton_year' style={style_button_year_outer}>
            <Button style={style_button_year} type="button" color="accent" onClick={this.handleTimeClick.bind(this, 'Year', 'findAlbumByYear')}>
              一年內
            </Button>

          </div>

          <div className='hasNestedComps elList' >
            <div style={style_list} >
              {items_list.map((row, index) => {

                let itemClasses = `gridItem cols4_${index % 4}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItem1 dataSheetId={'listData1'} dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} {...this.props} />;


                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>

                )
              })}

            </div>

          </div>

          {/* <div className='actionFont elButton_delete' style={style_button_delete_outer}>
            <Button style={style_button_delete} color="accent" >
              {this.props.locStrings.newbubblediary_button_93732}
            </Button>

          </div> */}






        </div>
      </Container>
    )
  }


}
