import React from 'react';
import {
    StyleSheet,
    View, 
    Button, 
    TextInput, 
  } from 'react-native';

const GoalInput = (props) => {
    const [newGoal, setNewGoal] = React.useState('');

    const handleInput = (input) => {
        setNewGoal(input);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Learning Goal"
                style={styles.input}
                onChangeText={handleInput}
                value={newGoal}
                />
            <Button title="ADD" onPress={() => props.addNewGoal(newGoal)}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default GoalInput;
