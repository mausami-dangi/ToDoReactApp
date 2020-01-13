import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from 'react-native-vector-icons/Entypo';
import COLORS from '../Constants/Colors';
import Modal from "react-native-modal";

export default TodoList = () => {

    const [toDoListArray, setToDoListArray] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [taskName, setTaskName] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
        setTaskName('')
    }

    const addNewTaskBtnPressed = () => {
        if (taskName === '') {
            alert('Please insert value for task name')
        } else {
            setToDoListArray([
                ...toDoListArray.map((item, index) => {
                    item.key = 'item-' + index
                    return item
                }),
                {
                    key: 'item-' + toDoListArray.length,
                    title: taskName,
                    isCompleted: false
                }
            ])
            toggleModal()
        }
    }

    const markAsCompleted = (itemKey) => {
        setToDoListArray(toDoListArray.map((item) => {
            if (item.key === itemKey) {
                item.isCompleted = !item.isCompleted
            }
            return item
        }))
    }

    const toDoListViewDesign = ({ item, index }) => {
        return (
            <View style={styles.listMainView}>
                <View style={styles.listTextContainer}>
                    <Text style={styles.listTextView}>
                        {item.title}
                    </Text>
                </View>
                <View style={styles.listCheckBoxContainer}>
                    <TouchableOpacity style={[
                        styles.listCheckBoxView,
                        {
                            backgroundColor: item.isCompleted ? COLORS.greenCheckBox : 'white'
                        }]}
                        onPress={() => markAsCompleted("item-" + index)}>
                        <Icon name="check"
                            size={15}
                            color={'white'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.popUpContainer}>
                        <TextInput style={styles.popupTextInput}
                            placeholder="Task name"
                            value={taskName}
                            onChangeText={(value) => {
                                setTaskName(value)
                            }} />
                        <View style={{
                            flexDirection: 'row',
                            flex: 1
                        }}>
                            <TouchableOpacity onPress={() => toggleModal()}
                                style={{
                                    flex: 0.5,
                                    margin: hp('2'),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: COLORS.blueFloatingButton,
                                    borderRadius: hp('1')
                                }}>
                                <Text style={{
                                    fontSize: hp('2.5'),
                                    color: 'white'
                                }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => addNewTaskBtnPressed()}
                                style={{
                                    flex: 0.5,
                                    margin: hp('2'),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: COLORS.blueFloatingButton,
                                    borderRadius: hp('1')
                                }}>
                                <Text style={{
                                    fontSize: hp('2.5'),
                                    color: 'white'
                                }}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>All Tasks</Text>
                </View>

                <View style={styles.middleContainer}>
                    <FlatList style={styles.listContainer}
                        data={toDoListArray}
                        renderItem={toDoListViewDesign}
                        showsVerticalScrollIndicator={false} />

                    <View style={styles.floatingButtonMainContainer}>
                        <TouchableOpacity style={styles.floatingButtonView}
                            onPress={() => toggleModal()}>
                            <Icon name="plus"
                                size={40}
                                color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerContainer: {
        flex: 0.06,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: hp('3')
    },
    middleContainer: {
        flex: 1,
    },
    listContainer: {
        marginBottom: hp('1')
    },
    listMainView: {
        padding: hp('2'),
        borderRadius: hp('7'),
        minHeight: hp('7'),
        marginLeft: hp('2'),
        marginRight: hp('2'),
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.45,
        flexDirection: 'row',
        marginTop: hp('1'),

    },
    listTextContainer: {
        flex: 0.90,
        marginLeft: hp('2'),
        justifyContent: 'center'
    },
    listTextView: {
        fontSize: hp('2.3')
    },
    listCheckBoxContainer: {
        flex: 0.10,
        marginRight: hp('2'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    listCheckBoxView: {
        height: hp('3.5'),
        width: hp('3.5'),
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.45,
        borderRadius: hp('3.5')
    },
    floatingButtonMainContainer: {
        alignItems: 'center',
    },
    floatingButtonView: {
        height: hp('8'),
        width: hp('8'),
        borderRadius: hp('8'),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        backgroundColor: COLORS.blueFloatingButton,
    },
    popUpContainer: {
        flex: 0.18,
        backgroundColor: 'white',
        borderRadius: hp('2')
    },
    popupTextInput: {
        height: hp('6'),
        marginLeft: hp('2'),
        marginRight: hp('2'),
        marginTop: hp('2'),
        borderRadius: hp('1'),
        backgroundColor: 'white',
        fontSize: hp('2'),
        shadowOffset: {
            width: 2,
            height: 2
        },
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: 'black',
        shadowOpacity: 0.50
    }
});
