import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../assets/colors';

import FlagIcon from '../../assets/images/flag.svg';
import LabelIcon from '../../assets/images/label.svg';
import {scaleByWidth} from '../../assets/style';
import CommonModal from '../../modal/CommonModal';
import Priorities from '../../components/Priorities/Priorities';
import Labels from '../../components/Labels/Labels';
import PushNotification from 'react-native-push-notification';

const AddNewTaskScreen = () => {
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [titleValue, setTitleValue] = useState<string>('');
  const [showPriorityModal, setShowPriorityModal] = useState<boolean>(false);
  const [showLabelModal, setShowLabelModal] = useState<boolean>(false);
  const [priority, setPriority] = useState<number | null>(null);
  const [label, setLabel] = useState<string>('');
  const [newTaskData, setNewTaskData] = useState({});
  const alltodos = [];

  const titleMaxLength = 40;
  const descriptionMaxLength = 360;

  const handleNotification = () => {
    PushNotification.localNotification(
      {
        channelId: 'new-id',
        title: 'You clicked a notification',
        message: 'This is the message of the notification.',
        importance: 'high', // Set importance to high
        priority: 'high', // Set priority to high
      },
      notificationId => {
        if (notificationId) {
          console.log(`Notification created with ID: ${notificationId}`);
        } else {
          console.error('Failed to create notification');
        }
      },
    );
  };

  const handleCloseModalPriority = () => {
    setShowPriorityModal(false);
    setPriority(null);
  };

  const handleCloseModalLabel = () => {
    setShowLabelModal(false);
    setLabel('');
  };

  const handleShowPriorityModal = () => {
    setShowPriorityModal(true);
  };

  const handleClosePriorityModal = () => {
    if (priority) {
      setShowPriorityModal(false);
    }
  };

  const handleShowLabelModal = () => {
    setShowLabelModal(true);
  };

  const handleCloseLabelModal = () => {
    if (label) {
      setShowLabelModal(false);
    }
  };

  const handleCreate = () => {
    setNewTaskData({
      title: titleValue,
      description: descriptionValue,
      priority: priority,
      label: label,
    });
    alltodos.push(newTaskData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={titleMaxLength}
        style={styles.input}
        placeholder="Type task name"
        placeholderTextColor={colors.whiteFaded}
        onChangeText={text => setTitleValue(text)}
        value={titleValue}
      />
      <TextInput
        multiline={true}
        onChangeText={text => setDescriptionValue(text)}
        value={descriptionValue}
        maxLength={descriptionMaxLength}
        style={styles.descriptionContainer}
        placeholder="Add description"
        placeholderTextColor={colors.whiteFaded}
      />

      <View>
        <TouchableOpacity
          style={styles.priorityContainer}
          // onPress={handleShowPriorityModal}>
          onPress={() => handleNotification()}>
          <FlagIcon />
          <Text style={styles.labelText}>Select priority</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={handleShowLabelModal}
          style={styles.priorityContainer}>
          <LabelIcon
            width={scaleByWidth(20)}
            height={scaleByWidth(20)}
            style={styles.marginRight}
          />
          <Text style={styles.labelText}>Select label</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleCreate}
        style={[styles.createButton, !titleValue && styles.disabled]}
        disabled={!titleValue.length}>
        <Text style={styles.buttonText}>Create!</Text>
      </TouchableOpacity>
      <CommonModal
        title="Select Task Priority"
        visible={showPriorityModal}
        visibilityHandler={handleCloseModalPriority}
        okBtnHandler={handleClosePriorityModal}
        isDisabled={!priority}>
        {<Priorities priority={priority} setPriority={setPriority} />}
      </CommonModal>
      <CommonModal
        title="Select Label"
        visible={showLabelModal}
        visibilityHandler={handleCloseModalLabel}
        okBtnHandler={handleCloseLabelModal}
        isDisabled={!label}>
        {<Labels label={label} setLabel={setLabel} />}
      </CommonModal>
    </View>
  );
};

export default AddNewTaskScreen;
