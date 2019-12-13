import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ExampleButton from './components/ExampleButton';

export default class App extends React.Component {

  updateAge = () => {
    this.setState({ age: this.state.age + 1 });
  }

  state = {
    age: 15,
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.age}</Text>
        <Button onPress={this.updateAge} title="Increase!!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
