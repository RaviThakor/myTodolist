import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTask, editTask } from '../store/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Card = ({ item }) => {
	const dispatch = useDispatch();
	const [editTaskName, setEditTaskName] = useState('');
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		setIsEdit(false);
	}, [])

	return (
		<View style={styles.listBox}>
			{isEdit ?
				<TextInput placeholder='Edit Task' style={[styles.textInput, { paddingVertical: 5 }]} value={editTaskName} onChangeText={value => setEditTaskName(value)} /> : <Text style={styles.whiteMediumText}>{item.title}</Text>
			}
			<View style={styles.editDeleteIconsContainer}>
				{isEdit ?
					<MaterialCommunityIcons
						name='content-save'
						style={styles.iconStyle}
						color='#eee'
						size={30}
						onPress={() => {
							setIsEdit(false);
							dispatch(editTask(editTaskName, item.id));
						}}
					/>
					:
					<MaterialCommunityIcons
						name='pencil'
						style={styles.iconStyle}
						color='#eee'
						size={30}
						onPress={() => {
							setIsEdit(true);
							setEditTaskName(item.title);
						}}
					/>}
				<MaterialCommunityIcons
					name='delete'
					style={styles.iconStyle}
					color='#b00'
					size={30}
					onPress={() => {
						setIsEdit(false);
						dispatch(removeTask(item.id));
					}}
				/>
			</View>
		</View>
	);
};

export default Card;
