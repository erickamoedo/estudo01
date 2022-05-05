import React, {Component} from 'react';
import { Text, View, Button, Style} from 'react-native';

 

export default class mainScreen extends Component {
 
  handleClick = () => {

    alert("test")
    console.log("Let'ss get down.")

  }


  render() {
      return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#000",        
                }}>
                <Text
                style={{color: "#fff"}}    
                >Oi pessoal</Text>

                  <View  style={{paddingTop:100}}>
                    <button
                    onClick={() => console.log('Click')}>Botão HTML</button>
                  </View>

                  <View  style={{paddingTop:100}}>
                    <Button                      
                   
                      onPress={this.handleClick}
                      title="Botão React"
                    />
                  </View>                
              </View>

      );
}
}

 
 
 