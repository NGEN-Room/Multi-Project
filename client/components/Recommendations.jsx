import React, { Component } from 'react'
import { Header, Card, Icon, Image  } from 'semantic-ui-react'


class Recommendations extends Component {
//  this.state={ }
    render () {

      const db = {
        profile1: { 
          id: '1', 
          name: 'Rangi Toto',
          email: 'rangitoto@gmail.com',
          phone: '021020202020',
          rate: '50',
          image: "images\heeni.png",
          description: 'Kia ora, Ko Rangitoto toku ingoa',
          dialect: 'NgaPuhi',
          level: 'Beginner'},
      
        profile2: { 
          id: '2', 
          name: 'Leonard ',
          email: 'rangitoto@gmail.com',
          phone: '021020202020',
          rate: '50',
          image: "images\heeni.png",
          description: 'Kia ora, Ko Rangitoto toku ingoa',
          dialect: 'NgaPuhi',
          level: 'Beginner' },
      
        profile3: { 
          id: '3', 
          name: 'Rangi Toto',
          email: 'rangitoto@gmail.com',
          phone: '021020202020',
          rate: '50',
          image: "images\heeni.png",
          description: 'Kia ora, Ko Rangitoto toku ingoa',
          dialect: 'NgaPuhi',
          level: 'Beginner' },
      }




      return (
        <React.Fragment>
          <Header as='h1' style={{fontSize: '100px', margin: '10px 10px 10px 10px'}}>Kia ora Heeni</Header>
          <Header as='h2'style={{fontSize: '70px', margin: '10px 10px 10px 10px'}}>Beginner</Header>

    {/* filter */}

    {/* Profiles */}
     

{profile = map}

        </React.Fragment>
      )
    }
  }
  

  
  export default Recommendations