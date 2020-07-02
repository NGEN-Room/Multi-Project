import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'

class Background extends Component {
 
    render () {
    
      return (
        <React.Fragment>   
      <Container style={{margin: '0',
                      height: '100%',
                      // background: 'rgb(22,95,102)',
                      background: 'linear-gradient(110deg, rgba(22,95,102,1) 0%, rgba(142,209,189,1) 100%)',
}}></Container>




        </React.Fragment>
        )   
    }
}
  

  
  export default Background

