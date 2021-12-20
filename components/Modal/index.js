import React from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

export default function ModalQuestion(props) {
  const { modalVisible, setModalVisible, onDelete, itemSelect } = props;

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <Text>Seguro que desea borrar {itemSelect.value}?</Text>
          <View style={styles.modalButtons}>
            <Button title="Si" onPress={() => onDelete(itemSelect.id)}></Button>
            <Button title="No" onPress={() => setModalVisible(false)}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    width: "60%",
    height: "12%",
    padding: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
