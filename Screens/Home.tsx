import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>This is my home page</Text>
            <Button
                title="Go to details" onPress={() => {
                    navigation.navigate('details');
                }}
            />
        </View>
    );
}

export default Home;
