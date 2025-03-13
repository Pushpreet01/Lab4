import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getUsers } from '../lib/supabase_crud';

const Lab6 = () => {
  interface User {
    loginID?: string;
    name?: string;
    email?: string;
    password?: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getUsers();
      if (result) setUsers(result);
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.loginID || item.email || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userInfo}>Login ID: {item.loginID}</Text>
            <Text style={styles.userInfo}>Name: {item.name}</Text>
            <Text style={styles.userInfo}>Email: {item.email}</Text>
            <Text style={styles.userInfo}>Password: {item.password}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userInfo: {
    fontSize: 16,
    color: '#333',
  },
});

export default Lab6;