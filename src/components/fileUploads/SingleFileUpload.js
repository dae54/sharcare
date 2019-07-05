import React, { Component } from 'react'

class SingleFileUpload extends Component {
    constructor(){
        super();
        this.state={
            selectedPic: {}
        }
        this.handleFileUPload = this.handleFileUPload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleFileUPload(event){
        this.setState({
            selectedPic : event.target.files[0]
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.selectedPic)
        fetch('http://localhost:8000/upload',({
            method:'POST',
            'Content-TYpe': 'multipart/form-data',
            // encType: 'multipart/form-data',
            body:this.state.selectedPic
        }))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method='POST' encType='multipart/form-data'>
                    example file input<br /> <br />
                    <input type='file' name='myImage' onChange={this.handleFileUPload}/><br/><br/>
                    <button type='submit' className='btn btn-light'>submit </button>
                </form>
            </div>
        )
    }
}

export default SingleFileUpload