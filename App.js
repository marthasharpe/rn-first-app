import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = React.useState([]);
  const [goalModal, setGoalModal] = React.useState(false);

  const addNewGoal = (newGoal) => {
    // this syntax guarantees that it is the current state snapshot
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: newGoal}
    ]);
  }

  const deleteGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  const closeModal = () => {
    setGoalModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setGoalModal(true)}/>
      <GoalInput
        visible={goalModal}
        closeModal={closeModal}
        addNewGoal={addNewGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            deleteGoal={deleteGoal}
            id={itemData.item.id}
            goalName={itemData.item.value}
          />
        )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
