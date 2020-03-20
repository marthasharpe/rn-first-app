import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [newGoal, setNewGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const handleInput = (input) => {
    setNewGoal(input);
  }

  const addNewGoal = () => {
    // this syntax guarantees that it is the current state snapshot
    setCourseGoals(currentGoals => [...currentGoals, newGoal])
    // clear input field
    setNewGoal('')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Learning Goal"
          style={styles.input}
          onChangeText={handleInput}
          value={newGoal}
          />
        <Button title="ADD" onPress={addNewGoal}/>
      </View>
      <View>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1
  },
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
