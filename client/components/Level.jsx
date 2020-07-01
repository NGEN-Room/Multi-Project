import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Level extends Component {

  render() {

    return (
      <>
      <Header style={{
        margin: '150px',
        fontSize: '75px',
        textAlign: 'center',
        height: '150px'
         }}>How experienced are you?
      </Header>
      
      <div style={{margin: '75px'}}>
        <button style={{    

        borderRadius: '35px',
        display: 'block',
        width: '90%',
        margin: 'auto',
        border: 'none',
        backgroundColor: '#B9B9B9	',
        padding: '100px 10px',
        fontSize: '50px',
        cursor: 'pointer',
        textAlign: 'center'}}>
           <Link to='/beginner' style={{color: 'black'}}> Beginner</Link>
        </button>
      </div>
     


      <div style={{margin: '75px'}}> 
        <button style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '90%',
          margin: 'auto',
          border: 'none',
          backgroundColor: '#B9B9B9	',
          padding: '100px 10px',
          fontSize: '50px',
          cursor: 'pointer',
          textAlign: 'center'}}>Intermediate
          </button>
      </div>

      <div style={{margin: '75px'}}> 
        <button style={{    
          borderRadius: '35px',
          display: 'block',
          width: '90%',
          margin: 'auto',
          border: 'none',
          backgroundColor: '#B9B9B9	',
          padding: '100px 10px',
          fontSize: '50px',
          cursor: 'pointer',
          textAlign: 'center'}}>Advanced
        </button>
      </div>

      <div style={{
        margin: '275px',
        textAlign: 'center',
      }}> 
        <h1>Looking to register as a tutor? click here</h1>
      </div>
      



</>
      )
    }
  }
 

  
export default Level