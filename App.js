import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableWithoutFeedback } from 'react-native';
import ExampleButton from './components/ExampleButton';

export default class App extends React.Component {

  state = {
    classes: [
      { name: 'Biology', grade: 89 },
      { name: 'Math', grade: 89},
      { name: 'How 2 be gangsta 101', grade: 128}
    ]
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.title}>Schoolloop Ripoff</Text>
        <ScrollView contentContainerStyle={styles.scroller}>
          {
            this.state.classes.map((item) => <Text>{item.name}</Text>)
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  }
});
