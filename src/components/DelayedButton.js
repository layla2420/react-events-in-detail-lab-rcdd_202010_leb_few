// Code DelayedButton Component Here
import React , {Component} from 'react'

export default class DelayedButton  {
handleClick()=>{
  window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
}
render(){
return(
<div>
<buttom onClick={handleClick}>Delayed</buttom>
</div>
  
)
  
}


  
}