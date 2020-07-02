import React, { Component } from 'react'
import { Header, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Intermediate extends Component {
 
    render () {
    
      return (
        <React.Fragment>   
  <Container style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '95%',
          margin: '20px 10px 20px 10px',
          border: 'none',
          backgroundColor: '#B9B9B9	',
          padding: '1300px 10px',
          fontSize: '50px',
          font: 'futura',
          textAlign: 'center'}}> 




    <div style={{
      margin: '155px', 
      }}> 

        <button style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '50%',
          margin: 'auto',
          float: "left",
          backgroundColor: '#FF6347',
          padding: '50px 10px 50px 10px',
          fontSize: '50px',
          font: 'futura',
          textAlign: 'center'}}>
          <Link to='/Level' style={{color: 'black'}}> Back</Link>
          </button>
          </div>

          <div style={{
      margin: '155px', 
      }}> 


        <button style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '50%',
          float: "right",
          margin: 'auto',
          backgroundColor: '#FF6347',
          padding: '50px 10px 50px 10px',
          fontSize: '50px',
          textAlign: 'center'}}>Next
          </button>      
    </div>



  </Container>

        </React.Fragment>
        )   
    }
}
  

  
  export default Intermediate