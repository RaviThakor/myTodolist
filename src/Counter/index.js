import React from 'react';
import {
	Text,
	View,
	TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../store/actions';

const Counter = () => {
	const dispatch = useDispatch();
	const { counter } = useSelector(state => state.count);

	return (
		<View style={styles.sectionContainer}>
			<Text style={styles.titleText}>Counter app</Text>
			<View style={styles.subContainer}>
				<TouchableHighlight underlayColor='#3aa' style={styles.buttonStyle} onPress={() => dispatch(increase())}>
					<Text>+</Text>
				</TouchableHighlight>
				<Text style={styles.countTextStyle}>{counter}</Text>
				<TouchableHighlight underlayColor='#3aa' style={styles.buttonStyle} onPress={() => dispatch(decrease())}>
					<Text>-</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
};

export default Counter;
