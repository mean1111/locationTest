// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {MapView} from 'expo';

// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//     }
//   }
//   //construct는 super를 항상 동반한다
//   componentDidMount(){
//     navigator.geolocation.getCurrentPosition(
//       (position) =>{
//         const{coords} = position;
//         this.setState({
//           latitude: coords.latitude,
//           longitude:coords.longitude
//         })
//       },
//       (error)=>{alert(error.message)},{
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000
//       }
//     )
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//       {this.state.latitude ? 
//         <MapView style={styles.mapbd} 
//         initialRegion= {{
//           latitude:this.state.latitude,
//           longitude:this.state.longitude,
//           latitudeDelta:0.0922,
//           longitudeDelta:0.0421,

//         }}
//         /> 
        
//         : <Text>위치를 읽어오는 중입니다...</Text>
//       }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bd:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'stretch',
   
//   },
// mapbd:{
//   flex:1,
// }

// });

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        this.setState({
          //여기에 뭔가를 지정하시고
          latitude: coords.latitude,
          longitude: coords.longitude
        });
      },
      (error) => { alert(error.message) },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        {this.state.latitude ?
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          : <Text>위치 읽어오는 중...</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bd: {
    borderColor: 'red',
    borderWidth: 3
  },

})