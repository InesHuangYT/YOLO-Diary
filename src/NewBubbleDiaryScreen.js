import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_53437.jpg';
import NavBar from './NavBar';
import Addbubble from './Addbubble';
import ListItem1 from './ListItem1';



import { Select } from 'antd';

// import Axios from 'axios';
import {
  Icon, Button, Input, AutoComplete,
} from 'antd';
// UI framework component imports
// import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
// import store from './store';



    const Option = AutoComplete.Option;

function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={`https://s.taobao.com/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      區塊中
      <span className="global-search-item-count">约 {item.count} 個结果</span>
    </Option>
  );
}


export default class NewBubbleDiaryScreen extends Component {

  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  }
  // Properties used by this component:
  // appActions, deviceInfo, fieldtitle, textcontent

  componentDidMount() {

    // let items_list2 = [];
    // items_list2 = this.props.appActions.getDataSheet('listUserBubble').items;
    // if(items_list2.length != 0){
    // console.log('listUserBubble check->', items_list2)
    // items_list2.map((row) =>{
    //   this.props.appActions.removeFromDataSheet('listUserBubble',row)
    // })

    // console.log('listUserBubble check after remove->', this.props.appActions.getDataSheet('listUserBubble').items)
    // }
    //removeItem(items_list2)

    // console.log(store.getValue())
    // Axios.get("/api/album/albums").then(res =>{
    //   console.log("response",res);
    //   console.log("response data",res.data);
    //   console.log("data total", res.data.content.length)
    //   console.log("data", res.data.content[1].name)
    // })


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

    const style_button_delete = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_delete_outer = {
      pointerEvents: 'none',
    };
    const style_button_update = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_update_outer = {
      pointerEvents: 'none',
    };
    const style_button_week = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_week_outer = {
      pointerEvents: 'none',
    };
    const style_button_month = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_month_outer = {
      pointerEvents: 'none',
    };
    const style_button_year = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_year_outer = {
      pointerEvents: 'none',
    };
    const { dataSource } = this.state;
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

<div className="global-search-wrapper" style={{ width: 300 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input
            suffix={(
              <Button className="search-btn" size="large" type="primary">
                <Icon type="search" />
              </Button>
            )}
          />
        </AutoComplete>
      </div>
          
          <div className='actionFont elButton_week' style={style_button_week_outer}>
            <Button style={style_button_week} color="accent" >
              一星期內
            </Button>
          </div>

          <div className='actionFont elButton_month' style={style_button_month_outer}>
            <Button style={style_button_month} color="accent" >
              一個月內
            </Button>

          </div>
          <div className='actionFont elButton_year' style={style_button_year_outer}>
            <Button style={style_button_year} color="accent" >
              一年內
            </Button>

          </div>

          <div className='hasNestedComps elList' >
            <div style={style_list} >
              {items_list.map((row, index) => {

                let itemClasses = `gridItem cols4_${index % 4}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItem1 dataSheetId={'listData1'} dataSheetRow={row}  appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} {...this.props}/>;
                

                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>

                )
              })}

            </div>

          </div>

          <div className='actionFont elButton_delete' style={style_button_delete_outer}>
            <Button style={style_button_delete} color="accent" >
              {this.props.locStrings.newbubblediary_button_93732}
            </Button>

          </div>

          <div className='actionFont elButton_update' style={style_button_update_outer}>
            <Button style={style_button_update} color="accent" >
              {this.props.locStrings.newbubblediary_button_547911}
            </Button>

          </div>

          

        </div>
      </Container>
    )
  }
  

}
