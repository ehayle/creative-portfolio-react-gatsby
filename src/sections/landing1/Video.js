import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import GTH from '../../assets/video/GoToHayle_1920.mp4'

import { Title, Button, Section, Box, Text } from "../../components/Core";



const videoStyle = {
   // border: '2px solid red',
    height: '100%',
    width: '100%',
    position: 'relative',
    //zIndex: '999',
    marginTop: '65px',
};


class Video extends React.Component {
render(){
   return(
     //<Section>
       //<Container>
     
               <div className="myVideo">
                  <video style={videoStyle} autostart autoPlay muted loop playsinline webkit-playsinline src={GTH} type={this.props.type}/>
               </div>
           
     // </Container>
     //</Section>

      )
    }
  }

  export default Video;



