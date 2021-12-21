import React from 'react';
import GTH from '../../assets/video/Comp_1.mp4'

const videoStyle = {
    height: '100%',
    width: '100%',
    position: 'relative',
    //zIndex: '999',
    marginTop: '65px',
};


class Videoes extends React.Component {
render(){
   return(
      <div className="myVideo">
          <video style={videoStyle} autostart autoPlay muted loop playsinline webkit-playsinline src={GTH} type={this.props.type}/>
     </div>
      )
    }
  }

  export default Videoes;