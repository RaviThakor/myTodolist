/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ScrollView,
    FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/actions';
import Card from './card';
import styles from './styles';

const ToDo = () => {
    const { tasks } = useSelector(state => state.count);
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');

    const renderItem = ({item}) => {
        return <Card item={item} />;
    }

    return (
        <ScrollView contentContainerStyle={styles.sectionContainer}>
            <View style={styles.horizontalItems}>
                <TextInput placeholder='Enter Task' style={styles.textInput} value={taskName} onChangeText={value => setTaskName(value)} />
                <TouchableHighlight style={styles.button} underlayColor='#7ab' onPress={() => {
                    if (taskName) {
                        dispatch(addTask(taskName));
                        setTaskName('');
                    }
                }}>
                    <Text style={styles.buttonTitle}>Add</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={tasks}
                    renderItem={renderItem}
                />
            </View>
        </ScrollView>
    );
};

export default ToDo;
