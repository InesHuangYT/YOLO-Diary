import React, { Component } from 'react';

//import './UploadPic.css';


class UploadPic extends Component {
    constructor(props) {
    super(props);
    this.state = {
        preview: null,
        data: null,
        config: null,
        form: null
    }
    }
    
    changePath = (e) => {
        
        var filenumber = e.target.files.length
        let photopv = [];
        let photodata = [];
        this.form = new FormData()
        

        for(var i = 0; i < filenumber; i++){

        const file = e.target.files[i];
        let src,previews,type=file.type;
        
        if (!file) {
            return;
        }
      
        if (/^image\/\S+$/.test(type)) {
           
            src = URL.createObjectURL(file)
            previews = <img src={src} style={{width:'250px',height:'168px'}} alt='' key = {i}/>
           
            photopv.push(previews)
            photodata.push(file)
            
            
            this.form.append(i,file);
            this.config = {
                headers: { 'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p' }
              }
              console.log(this.form);
             
              
              
        }
    }   
        this.setState({ data: photodata, preview: photopv})
        
        
    }
    

    upload = () => {
        
        const data = this.state.data;
        if (!data) {
            console.log('未選擇文件');
            return;
        }
    }

  

    render() {
        
        const { preview } = this.state;
      
        
        return (
          

            <div className="group-upload">
                <div className='box-image'>
                    {preview}
                </div>
                <div className='box-icon'>
                    <i className="icon" >
                        <input className='row-input' type='file' accept='image/*' onChange={this.changePath} multiple={true} />
                    </i>
                </div>
            </div>

                 
                   
          
             
           
            
          
        )
    }
}export default UploadPic;
