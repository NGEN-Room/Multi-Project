import React, { Component } from 'react'
import { Header, Container} from 'semantic-ui-react'

class Beginner extends Component {
 
    render () {
    
      return (
        <React.Fragment>   
  <Container style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '95%',
          margin: 'auto',
          border: 'none',
          backgroundColor: '#B9B9B9	',
          padding: '800px 10px',
          fontSize: '50px',
          textAlign: 'center'}}> 



    <div style={{margin: '155px'}}> 
        <button style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '50%',
          margin: 'auto',
          float: "left",
          backgroundColor: '#FF6347',
          padding: '50px 10px 50px 10px',
          fontSize: '50px',
          textAlign: 'center'}}>Intermediate
          </button>
          </div>

    <div style={{margin: '155px'}}> 
        <button style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '50%',
          float: "right",
          margin: 'auto',
          border: 'none',
          backgroundColor: '#FF6347',
          padding: '50px 10px 50px 10px',
          fontSize: '50px',
          cursor: 'pointer',
          height: '-50px',
          textAlign: 'center'}}>Intermediate
          </button>      

</div>


  </Container>

        </React.Fragment>
        )   
    }
}
  

  
  export default Beginner