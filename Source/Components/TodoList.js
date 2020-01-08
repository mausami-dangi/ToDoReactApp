import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import Icon from 'react-native-vector-icons/Entypo';
import COLORS from '../Constants/Colors';

const toDoListArray = [
    {
        id: '001',
        title: 'Mausami',
    },
    {
        id: '002',
        title: 'Kalgi',
    }
];

function toDoListViewDesign() {
    return (
        <View style={styles.listMainView}>
            <View style={styles.listTextContainer}>
                <Text style={styles.listTextView}>{'Learn React-Native'}</Text>
            </View>
            <View style={styles.listCheckBoxContainer}>
                <View style={styles.listCheckBoxView}>
                    <Icon name="check" size={20} color="white" />
                </View>
            </View>
        </View>
    );
}

export default function TodoList() {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{'All Tasks'}</Text>
                </View>

                <View style={styles.middleContainer}>
                    <FlatList
                        style={styles.listContainer}
                        data={toDoListArray}
                        renderItem={() => toDoListViewDesign()}
                        showsVerticalScrollIndicator={false} />

                    <View style={styles.floatingButtonMainContainer}>
                        <TouchableOpacity style={styles.floatingButtonView}>
                                <Icon name="plus" size={40} color={'white'}/>
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
        height: hp('7'),
        marginLeft: hp('1'),
        marginRight: hp('1'),
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.20,
        flexDirection: 'row',
        marginTop: hp('1')
    },
    listTextContainer: {
        flex: 0.90,
        marginLeft: hp('2'),
        justifyContent: 'center'
    },
    listTextView: {
        fontSize: hp('2.3')
    },
    listCheckBoxContainer:{
        flex: 0.10,
        marginRight: hp('2'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    listCheckBoxView: {
        height: hp('3.5'),
        width: hp('3.5'),
        backgroundColor: COLORS.greenCheckBox,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.20,
    },
    floatingButtonMainContainer: {
        alignItems: 'center'
    },
    floatingButtonView: {
        height:hp('8'),
        width:hp('8'),
        borderRadius:hp('8'),
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: 10,
        backgroundColor: COLORS.blueFloatingButton
    }
});
