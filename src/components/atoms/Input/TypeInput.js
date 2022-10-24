import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const TypeInput = (props) => {
    return (
        <View style={{ padding: 10 }}>
            <TextInput 
                style={styles.input}
                placeholder= {props.placeholder}
                // onChangeText={(text) => this.setState({ text })}
            />
            {/* <Text style={{ padding: 10, fontSize: 20 }}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text> */}
        </View>
    );
}



// AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 3,
        borderBottomColor:'#d3d3d3',
    }
});

export default TypeInput;