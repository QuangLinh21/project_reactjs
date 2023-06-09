import React, { Component } from 'react'

export default class NotFoundPages extends Component {
  render() {
    return (
      <div className='container'>
        
        <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Not Found</strong> 
        </div>
        
      </div>
    )
  }
}
