import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import ExampleButton from './components/ExampleButton';

export default class App extends React.Component {

  updateAge = () => {
    this.setState({ age: this.state.age + 1 });
  }

  state = {
    classes: [
      { name: 'Biology', grade: 89 },
      { name: 'euro', grade: 75 },
      { name: 'Math', grade: 89}
    ]
  }

  render(){
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          this.state.classes.map(cl => {
            return <Text>{cl.name}</Text>
          })
        }
      </ScrollView>
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
