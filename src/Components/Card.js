import React, { Component } from 'react'



export default class Card extends Component {
    state = {
        number:'',
        name:'',
        expiry:''
    }
    handleChangeName = (event) =>{
       if(event.target.value.length <= 20)
        this.setState({name:event.target.value})
    
    }
    handleChangeNumber = (event) =>{
       if(event.target.value.length <= 19)
       {
        event.target.value = event.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})/g, "$1 ").trim();
        this.setState({number:event.target.value})
       }
    }
    handleChangeExpiry = (event) =>{
        if(event.target.value.length <= 5)
       {
        event.target.value=event.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})(\d{1})/, "$1/$2")
       
        this.setState({expiry:event.target.value})
       }
       
    }
    render() {
        return (
            <div>
                
               <div className='container'>
               
                       <div className='credit-card-container'>
                       <img className='credit-card-logo' src='' alt=''/>
                           <div className='credit-card-number'>{this.state.number?this.state.number:'•••• •••• •••• ••••'}</div>
                           <div className='credit-card-name'>{this.state.name?this.state.name.toUpperCase():'YOUR NAME HERE'}</div>
                           <div className='credit-card-info'>
                                <div className='credit-card-expiry'>Valid Up To</div>
                                <div className='credit-card-expiry-value'>{this.state.expiry?this.state.expiry:'••/••'}</div>
                            </div>
                        </div>
                        <form class="credit-card-input">
                            <label>Name</label>
                            <input   value={this.state.name} onChange={this.handleChangeName}/>
                            <label>Card Number</label>
                            <input   value={this.state.number} onChange={this.handleChangeNumber}/>
                            <label>Expiration (mm/yy)</label>
                            <input   value={this.state.expiry} onChange={this.handleChangeExpiry}/>
                        </form>
                        
                </div>
            </div>
        )
    }
}
