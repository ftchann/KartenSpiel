import React, { Component } from 'react';
import { Text, View, Button, ScrollView} from 'react-native';


export default class App extends Component {
  state={
    isVisible:false
  }

  renderResults=() =>{
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    return (
        <ScrollView>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            {this.state.isVisible?<Text> get printed </Text>:null}
            <Button onPress={ this.renderResults}
                    title="Search!"
                    color="#841584" />
          </View>
        </ScrollView>
    );
  }
}

