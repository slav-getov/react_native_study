import {Text, StyleSheet, View} from 'react-native';

const CombinedTextElement = () =>{
    const informationText = <Text style={style.text}>P is my name.</Text>
    return (
        <View>
            <Text>Getting started with React Native!</Text>
            {informationText}
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 20,
    }
})
export default CombinedTextElement;