import React from 'react';
import { View, Text, TextInput, Button, FlatList } from "react-native";

const Lists = () => {
    const [players, setPlayers] = React.useState(['pogba', 'rashford', 'de gea', 'scott']);
    return (
        <View>
            <View>
                <FlatList data={players}
                    renderItem={({ item }) => <Text>{item}</Text>}
                 />
            </View>
        </View>
    );
}

export default Lists;
