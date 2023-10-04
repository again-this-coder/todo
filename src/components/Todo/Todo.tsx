import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import {styles} from './styles';
import {labelIcons} from '../../assets/todoData';
import FlagIcon from '../../assets/images/flag.svg';
import {scaleByWidth} from '../../assets/style';
import CommonModal from '../../modal/CommonModal';
import {fakeData} from '../todoList/fakeData';

type Props = {
  title: string;
  priority: number;
  label: string;
  description: string;
  labelColor: string;
  id: number;
};

const Todo: FC<Props> = ({
  title,
  priority,
  label,
  description,
  labelColor,
  id,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showDescriptionModal, setShowDescriptionModal] =
    useState<boolean>(false);
  const [test, setTest] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}]);

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  const handleShowModal = () => {
    setShowDeleteModal(true);
    console.log('4', test);

  };

  const handleShowDescriptionModal = () => {
    setShowDescriptionModal(true);
  };

  const handleCloseDescriptionModal = () => {
    setShowDescriptionModal(false);
  };

  const handleDelete = () => {
    console.log('4', test);

    setTest(test.filter(item => item.id !== id));
    console.log(id);
    console.log('4', test);

    setShowDeleteModal(false);
  };

  return (
    <>
      <TouchableOpacity
        delayLongPress={300}
        onLongPress={handleShowModal}
        onPress={handleShowDescriptionModal}
        style={styles.containter}>
        <View>
          <TouchableOpacity style={styles.checkbox} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.details}>Press for details</Text>
            <View style={styles.additionalInfoContainer}>
              {label && (
                <View style={[styles.label, {backgroundColor: labelColor}]}>
                  {labelIcons[label]}
                  <Text style={styles.labelText}>{label}</Text>
                </View>
              )}

              {priority && (
                <View style={styles.priorityBox}>
                  <FlagIcon
                    width={scaleByWidth(14)}
                    height={scaleByWidth(14)}
                  />
                  <Text style={styles.priorityText}>{priority} </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <CommonModal
        visible={showDeleteModal}
        visibilityHandler={handleCloseModal}
        okBtnHandler={handleDelete}
        title="Delete Task?"
        okBtnText="Delete">
        <Text style={[styles.title, styles.modalTitle]}>
          Are you sure you want to delete task:
        </Text>
        <Text style={[styles.title, styles.taskNameModal]}>{title}</Text>
      </CommonModal>

      <CommonModal
        visible={showDescriptionModal}
        visibilityHandler={handleCloseDescriptionModal}
        okBtnHandler={handleDelete}
        title="Description"
        okBtnText="Delete"
        hideOkBtn
        cancelBtnText="Close">
        <Text style={[styles.title, styles.taskNameModal]}>{description}</Text>
      </CommonModal>
    </>
  );
};

export default Todo;
