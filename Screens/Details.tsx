import React from "react";
import { View, Text, Button } from "react-native";

const Details = ({ navigation }) => {
    return (
        <View>
            <Text>This is my Details page</Text>
            <Button
                title="move to lists" onPress={() => {
                    navigation.navigate('lists');
                }}
            />
        </View>
    );
}

export default Details;
