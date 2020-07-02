import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Level extends Component {

  render() {

    return (
      <>

      <div style={{
        margin: '0',
        height: '400px',
        background: 'rgb(22,95,102)',
        background: 'linear-gradient(110deg, rgba(22,95,102,1) 0%, rgba(142,209,189,1) 100%)',
        borderRadius: '0px 0px 250px 30px'
}}>
      <Header style={{
        fontSize: '75px',
        textAlign: 'center',
        padding: '100px 10px 20px 10px',
        color: 'white'
         }}>Choose Your Level
      </Header>


      </div>

<Container style={{margin: '0', height: '10000px', backgroundColor: 'white', padding: '50px 10px  50px 10px'}}>

      
      <div style={{margin: '75px'}}>
        <button style={{    

        borderRadius: '20px',
        display: 'block',
        width: '90%',
        margin: 'auto',
        backgroundColor: '	#165F66',
        padding: '50px 10px 50px 10px',
        fontSize: '50px',
        textAlign: 'center'}}>
           <Link to='/Advanced' style={{color: 'white'}}> Advanced</Link>
        </button>
      </div>
     


      <div style={{margin: '75px'}}> 
        <button style={{   
          borderRadius: '20px',
          display: 'block',
          width: '90%',
          margin: 'auto',
          backgroundColor: '	#43ACB8',
          padding: '50px 10px 50px 10px',
          fontSize: '50px',
          textAlign: 'center'}}>
          <Link to='/Intermediate' style={{color: 'white'}}> Intermediate</Link>
          </button>
      </div>

      <div style={{margin: '75px'}}> 
        <button style={{    
          borderRadius: '20px',
          display: 'block',
          width: '90%',
          margin: 'auto',
          backgroundColor: '	#8ED1BD',
          padding: '50px 10px 50px 10px',
          fontSize: '50px',
          textAlign: 'center'}}>
            <Link to='/beginner' style={{color: 'white'}}> Beginner</Link>
        </button>
      </div>

      <div style={{
        margin: '275px',
        textAlign: 'center',
      }}> 
        <h1>Looking to register as a tutor? click here</h1>
      </div>

</Container>
      



</>
      )
    }
  }
 

  
export default Level