import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.deleteGoal(props.id)}
        >
            <View style={styles.listItem}>
                <Text>{props.goalName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginTop: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});

export default GoalItem;
