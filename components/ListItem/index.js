import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

export default function ListItem(props) {
  const { list, onHandlerModal } = props;
  const { showDelete } = props;

  return (
    <View style={styles.listContainer}>
      {list.length > 0 ? (
        <FlatList
          data={list}
          renderItem={(data) => (
            <View style={styles.listElement}>
              <Text>{data.item.value}</Text>
              { showDelete ?
                 (<Button onPress={() => onHandlerModal(data.item)} title="X" />) 
                 : (<></>)
              }
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text> No hay tareas </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listElement: {
    backgroundColor: "#aaf",
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    backgroundColor: "#ddd",
    padding: 20,
    marginTop: 20,
  },
});
