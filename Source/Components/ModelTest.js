import React, { Component } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default class ModelTest extends Component {
    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View style={{ flex: 1, marginTop: 50 }}>
                <TouchableOpacity  style={{height: 50, width: 50, backgroundColor: 'red'}} onPress={this.toggleModal} ><Text>Show Model</Text></TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 0.5, backgroundColor: 'green' }}>
                        <TouchableOpacity  style={{height: 50, width: 50, backgroundColor: 'red'}} onPress={this.toggleModal} ><Text>Hide Model</Text></TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}
