import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [listItems, setListItems] = useState([
    {
      key: 1,
      task: "Finish novel",
    },
    {
      key: 2,
      task: "Finish assignment",
    },
    {
      key: 3,
      task: "Finish project",
    },
    {
      key: 4,
      task: "Finish homework",
    },
  ]);

  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText) {
      const newTask = {
        key: listItems.length + 1,
        task: taskText,
      };

      const newList = [...listItems, newTask];
      setListItems(newList);
      setTaskText("");
    }
  };

  const deleteTask = (key) => {
    const newList = listItems.filter((item) => item.key !== key);
    setListItems(newList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Grocery List</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={taskText}
          onChangeText={setTaskText}
        />
        <View style={styles.button}>
          <Button title="Add Task" color="black" onPress={addTask} />
        </View>
      </View>
      <Text style={{ textAlign: "center" }}>
        You have <Text style={{ fontWeight: "bold" }}>{listItems.length}</Text>{" "}
        item(s) remaining on your list
      </Text>
      {listItems.length > 0 ? (
        <View style={styles.listItems}>
          <FlatList
            data={listItems}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => deleteTask(item.key)}>
                <Text style={styles.taskText}>
                  {item.key}. {item.task}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <Text style={styles.noText}>New Items Appear Here</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
    elevation: 2,
    zIndex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    width: 300,
    textAlign: "center",
    zIndex: 2,
    elevation: 2,
  },
  listItems: {
    flex: 4,
    padding: 10,
    alignItems: "center",
  },
  input: {
    margin: 20,
    borderBottomWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 20,
    padding: 10,
  },
  button: {
    padding: 20,
    margin: 20,
  },
  noText: {
    flex: 3,
    textAlign: "center",
    fontSize: 14,
    paddingTop: 10,
  },
});
