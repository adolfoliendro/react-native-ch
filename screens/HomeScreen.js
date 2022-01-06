import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

export default function HomeScreen( props ) {
  // const navigation = useNavigation();

  const { navigation, list } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState({});

  const onHandlerModal = (item) => {
    setItemSelect(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.screen}>
      {/* <Header title={"Menu principal"} /> */}
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text>Notas {typeof(list)}</Text>
          {/* <ListItem list={list} onHandlerModal={onHandlerModal} showDelete={true} /> */}
          <View style={styles.buttonContainer}>
            <Button title="Nuevo"></Button>
            <Button title="Buscar"></Button>
            <Button
              title="Ver todo"
              onPress={() => {
                navigation.navigate("ListScreen");
              }}
            ></Button>
          </View>
        </Card>
        <Card style={styles.card}>
          <Text>Notas recientes</Text>
          {/* <ListItem /> */}
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    // width: 300,
    width: "90%",
    margin: 10,
    paddingVertical: 20,
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
