import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FormContainer = ({ isVisible, onClose }) => {
  const [transactionType, setTransactionType] = useState('inflow');
  const [beneficiary, setBeneficiary] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('cash');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleSave = () => {
    console.log({
      transactionType,
      beneficiary,
      amount,
      paymentMode,
      date,
      description,
    });

    onClose(); // Close the form after saving
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Add Transaction</Text>

          {/* Transaction Type: Inflow or Outflow */}
          <View style={styles.radioContainer}>
            <RadioButton
              value="inflow"
              status={transactionType === 'inflow' ? 'checked' : 'unchecked'}
              onPress={() => setTransactionType('inflow')}
            />
            <Text style={styles.radioText}>Inflow</Text>
            <RadioButton
              value="outflow"
              status={transactionType === 'outflow' ? 'checked' : 'unchecked'}
              onPress={() => setTransactionType('outflow')}
            />
            <Text style={styles.radioText}>Outflow</Text>
          </View>

          {/* Beneficiary Name */}
          <TextInput
            style={styles.input}
            placeholder="Beneficiary Name"
            value={beneficiary}
            onChangeText={setBeneficiary}
          />

          {/* Amount */}
          <TextInput
            style={styles.input}
            placeholder="Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          {/* Mode of Payment: Cash or Check */}
          <View style={styles.radioContainer}>
            <RadioButton
              value="cash"
              status={paymentMode === 'cash' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMode('cash')}
            />
            <Text style={styles.radioText}>Cash</Text>
            <RadioButton
              value="check"
              status={paymentMode === 'check' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMode('check')}
            />
            <Text style={styles.radioText}>Check</Text>
          </View>

          {/* Date Picker */}
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setIsDatePickerVisible(true)}
          >
            <Text style={styles.datePickerText}>
              {date ? date.toDateString() : 'Select Date'}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={isDatePickerVisible}
            date={date}
            mode="date"
            onConfirm={(selectedDate) => {
              setIsDatePickerVisible(false);
              setDate(selectedDate);
            }}
            onCancel={() => setIsDatePickerVisible(false)}
          />

          {/* Description */}
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    minHeight: 400,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioText: {
    marginRight: 20,
  },
  datePickerButton: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  datePickerText: {
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#52b865',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF5722',
    padding: 5,
    borderRadius: 30,
  },
});

export default FormContainer;
