import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {styles} from './styles';

type Props = {
  title: string;
  children: ReactNode;
  customContainerStyle?: StyleProp<ViewStyle>;
  visible: boolean;
  visibilityHandler: (arg: boolean) => void;
  okBtnHandler: (arg: any) => void;
  isDisabled?: boolean;
  okBtnText?: string;
  hideOkBtn?: boolean;
  cancelBtnText?: string;
};

const CommonModal: FC<Props> = ({
  title,
  children,
  customContainerStyle,
  visible,
  visibilityHandler,
  okBtnHandler,
  isDisabled,
  okBtnText,
  cancelBtnText,
  hideOkBtn,
}) => {
  const handleClose = (arg: any) => {
    visibilityHandler(arg);
  };
  return (
    <Modal visible={visible} transparent>
      <View style={styles.centeredContainer}>
        <View style={styles.canvas} />
        <View style={[styles.container, customContainerStyle]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
          {children}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.buttonCancel,
                hideOkBtn && styles.singleButton,
              ]}
              onPress={handleClose}>
              <Text style={styles.buttonText}>{cancelBtnText ?? 'Cancel'}</Text>
            </TouchableOpacity>
            {!hideOkBtn && (
              <TouchableOpacity
                style={[styles.button, isDisabled && styles.inActive]}
                onPress={okBtnHandler}
                disabled={isDisabled}>
                <Text style={styles.buttonText}>{okBtnText ?? 'Edit'}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;

//test
