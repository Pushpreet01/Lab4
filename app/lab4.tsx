import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import vacationDestinations from '../constants/vacationsDestinations';

interface Destination {
    id: number;
    location: string;
    price: number;
    average_yearly_temperature: string;
}

export default function Lab4(): JSX.Element {
    const [selected, setSelected] = useState<number[]>([]);

    const toggleSelection = (id: number) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
            <FlatList
                data={vacationDestinations}
                keyExtractor={(item: Destination) => item.id.toString()}
                renderItem={({ item }: { item: Destination }) => (
                    <TouchableOpacity style={styles.item} onPress={() => toggleSelection(item.id)}>
                        <Text style={styles.text}>
                            {selected.includes(item.id) ? "✅ " : ""}
                            {item.location} - ${item.price} - {item.average_yearly_temperature}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    item: { padding: 15, borderBottomWidth: 1, borderColor: "#ddd" },
    text: { fontSize: 16 }
});

