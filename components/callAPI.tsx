// components/CallAPI.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface PostData {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

const CallAPI = () => {
  const [data, setData] = useState<PostData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User ID:</Text>
      <Text style={styles.value}>{data.userId}</Text>

      <Text style={styles.label}>Post ID:</Text>
      <Text style={styles.value}>{data.id}</Text>

      <Text style={styles.label}>Title:</Text>
      <Text style={styles.title}>{data.title}</Text>

      <Text style={styles.label}>Body:</Text>
      <Text style={styles.body}>{data.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'grey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: '90%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'purple',
  },
  value: {
    fontSize: 14,
    color: 'white',
  },
  title: {
    fontSize: 14,
    marginVertical: 10,
    color: 'white',
  },
  body: {
    fontSize: 14,
    color: 'white',
    lineHeight: 22,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CallAPI;
