import React, { Component } from 'react';
//import './UploadPic.css';


class UploadPic extends Component {
    state = {
        preview: null,
        data: null
    }

    

    
    changePath = (e) => {
        
        var filenumber = e.target.files.length
        let photopv = [];
        let photodata = [];
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

        
        const url = 'http://localhost:3000/api/upload';
        const form = new FormData();

        form.append('file', data);

        fetch(url, {
            method: 'POST',
            body: form
        }).then(res => {
            console.log(res)
        })
    }

  

    render() {
        
        const { preview } = this.state;
      
        
        return (
            <div>
                
            <div className = "group-upload"> 
            <div className = 'box-image'>
                     {preview}
                      </div>
              <div className='box-icon'>
            
                <i className="icon" >
                
                    <input className='row-input' type='file' accept='image/*' onChange={this.changePath} multiple={true}/>
                    
                      </i>
                     
                      </div>
                      </div>
                      
                   
                      </div>
                      
                 
                   
          
             
           
            
          
        )
    }
}export default UploadPic;
