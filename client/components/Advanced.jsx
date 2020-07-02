import React, { Component } from 'react'
import { Header, Container, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Advanced extends Component {
 
    render () {
    
      return (
        <React.Fragment>   
          
          <Container style={{margin: '0',
                      height: '100%',
                      // background: 'rgb(22,95,102)',
                      background: 'linear-gradient(110deg, rgba(22,95,102,1) 0%, rgba(142,209,189,1) 100%)',
                      overflow: 'hidden'
}}></Container>


  <Container style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '95%',
          margin: '20px 10px 20px 10px',
          border: 'none',
          background: 'linear-gradient(110deg, rgba(22,95,102,1) 0%, rgba(142,209,189,1) 100%)',
          padding: '200px 10px',
          fontSize: '50px',
          textAlign: 'center'}}> 


<h1 style={{
  color: 'White',
  margin: 'auto',
  fontFamily: 'Montserrat'
}}>Advanced</h1> 

<Image
    src='./images/beginner.png'
    size='tiny'
    style={{
      width:'10em', height:'10em'
    }}
  />

<h5 style={{
      fontsize: '5px',
      color: 'white',
      fontFamily: 'Montserrat'
    }}>
  This level is for those who are highly advanced in Te Reo Māori and would like to expand on their fluency, in-depth sentences and culture. With your tutor you will learn how to speak in proverbs and write more fluently </h5>
    
  
    
    <div style={{
      margin: '155px', 
    }}> 
    

        <button style={{   
          borderRadius: '35px', 
          display: 'block',
          width: '50%',
          margin: 'auto',
          float: "left",
          backgroundColor: '#F0FFFF',
          padding: '50px 10px 50px 10px',
          fontSize: '40px',
          textAlign: 'center'}}>
          <Link to='/Level' style={{color: 'teal'}}> Back</Link>
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
          backgroundColor: '#F0FFFF',
          padding: '50px 10px 50px 10px',
          fontSize: '40px',
          textAlign: 'center'}}>
          <Link to='/Recommendations' style={{color: 'teal'}}> Next</Link>
          </button>      
    </div>



  </Container>

        </React.Fragment>
        )   
    }
}
  

  
  export default Advanced