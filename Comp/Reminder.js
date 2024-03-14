import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,

} from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoList = () => {
  const [taskName, setTaskName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Load saved tasks from AsyncStorage
    loadTasks();
  }, []);

  useEffect(() => {
    // Save updated tasks to AsyncStorage
    saveTasks();
  }, [taskList]);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTaskList(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.log('Error loading tasks from AsyncStorage:', error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(taskList));
    } catch (error) {
      console.log('Error saving tasks to AsyncStorage:', error);
    }
  };

  const handleAddTask = () => {
    if (taskName.trim() === '' || selectedDate === '') {
      return;
    }
    setTaskList([...taskList, { taskName, selectedDate }]);
    setTaskName('');
    setSelectedDate('');
  };

  const handleDeleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.taskName}</Text>
      <Text style={styles.itemText}>{item.selectedDate}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTask(index)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, dotColor: 'white' },
        }}
        style={styles.calendar}
      />
      <TextInput
        style={styles.input}
        value={taskName}
        placeholder="Enter task name"
        onChangeText={(text) => setTaskName(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  calendar: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
  flex: 1,
  },
  item: {
  backgroundColor: 'white',
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  },
  itemText: {
  fontWeight: 'bold',
  },
  deleteButton: {
  backgroundColor: '#f44336',
  padding: 8,
  borderRadius: 5,
  },
  deleteButtonText: {
  color: 'white',
  },
  });
  
  export default ToDoList;
