import React from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = React.useState([]);

  const addNewGoal = (newGoal) => {
    // this syntax guarantees that it is the current state snapshot
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: newGoal}
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput addNewGoal={addNewGoal}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem goalName={itemData.item.value} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
