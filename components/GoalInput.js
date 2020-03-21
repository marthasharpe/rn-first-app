import React from 'react';
import {
    StyleSheet,
    View, 
    Button, 
    TextInput,
    Modal 
  } from 'react-native';

const GoalInput = (props) => {
    const [newGoal, setNewGoal] = React.useState('');

    const handleInput = (input) => {
        setNewGoal(input);
    }

    const handleAddGoal = () => {
        props.addNewGoal(newGoal);
        setNewGoal('');
        props.closeModal();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Learning Goal"
                    style={styles.input}
                    onChangeText={handleInput}
                    value={newGoal}
                    />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD GOAL" onPress={handleAddGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="grey" onPress={props.closeModal}/>                    
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 5,
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-around"
    },
    button: {
        width: "40%"
    }
});

export default GoalInput;
