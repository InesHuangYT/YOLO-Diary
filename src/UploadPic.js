import React, { Component } from 'react';
//import './UploadPic.css';


class UploadPic extends Component {
    state = {
        preview: null,
        data: null
    }

    

    
    changePath = (e) => {
        
        const file = e.target.files[0];
        let src,preview,type=file.type;
        
      
        
        if (!file) {
            return;
        }

       
         
      
        if (/^image\/\S+$/.test(type)) {
            src = URL.createObjectURL(file)
            preview = <img src={src} alt=''  />
        }
       
   
        else if (/^text\/\S+$/.test(type)) {
            const self = this;
            const reader = new FileReader();
             reader.onload = function (e) {
               
                preview = <textarea value={this.result} readOnly></textarea>
                self.setState({ data: file, preview: preview })
                }
            
            return;
            
        }
        this.setState({ data: file, preview: preview  })
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
             
                  <div className='box-icon'>
               
                    <i className="icon" >
                  
                        <input className='row-input' type='file' accept='image/*' onChange={this.changePath} multiple={true}/>

                          </i>
                          </div>
                          </div>
                          <div className = "group-upload"> 
                          <div className = "box-image">
                         {preview} 
                        </div>
                     </div>
                    
                  </div>
                 
               
                
              
            
        )
    }
}export default UploadPic;
