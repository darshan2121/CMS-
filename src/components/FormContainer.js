import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FormContainer = ({ isVisible, onClose }) => {
  const [transactionType, setTransactionType] = useState('inflow');
  const [paymentMode, setPaymentMode] = useState('cash');
  const [beneficiary, setBeneficiary] = useState('');
  const [amount, setAmount] = useState('');
  const [chequeNumber, setChequeNumber] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleSave = () => {
    // Validation logic
    if (!beneficiary || !amount || (paymentMode === 'cheque' && !chequeNumber)) {
      Alert.alert(
        'Validation Error',
        'Please fill all required fields before saving.',
        [{ text: 'OK' }]
      );
      return;
    }

    // Save transaction
    console.log({
      transactionType,
      paymentMode,
      beneficiary,
      amount,
      chequeNumber: paymentMode === 'cheque' ? chequeNumber : null,
      date,
      description,
    });

    Alert.alert(
      'Success',
      'Transaction saved successfully!',
      [{ text: 'OK', onPress: onClose }]
    );
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

          {/* Transaction Type Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                transactionType === 'inflow' && styles.activeTab,
              ]}
              onPress={() => setTransactionType('inflow')}
            >
              <Text
                style={[
                  styles.tabText,
                  transactionType === 'inflow' && styles.activeTabText,
                ]}
              >
                Inflow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                transactionType === 'outflow' && styles.activeTab,
              ]}
              onPress={() => setTransactionType('outflow')}
            >
              <Text
                style={[
                  styles.tabText,
                  transactionType === 'outflow' && styles.activeTabText,
                ]}
              >
                Outflow
              </Text>
            </TouchableOpacity>
          </View>

          {/* Beneficiary */}
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

          {/* Payment Mode Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                paymentMode === 'cash' && styles.activeTab,
              ]}
              onPress={() => setPaymentMode('cash')}
            >
              <Text
                style={[
                  styles.tabText,
                  paymentMode === 'cash' && styles.activeTabText,
                ]}
              >
                Cash
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                paymentMode === 'cheque' && styles.activeTab,
              ]}
              onPress={() => setPaymentMode('cheque')}
            >
              <Text
                style={[
                  styles.tabText,
                  paymentMode === 'cheque' && styles.activeTabText,
                ]}
              >
                Cheque
              </Text>
            </TouchableOpacity>
          </View>

          {/* Cheque Number (Visible only when Cheque is selected) */}
          {paymentMode === 'cheque' && (
            <TextInput
              style={styles.input}
              placeholder="Cheque Number"
              value={chequeNumber}
              onChangeText={setChequeNumber}
            />
          )}

          {/* Date Picker Button */}
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setIsDatePickerVisible(true)}
          >
            <Text style={styles.datePickerText}>
              {date ? date.toDateString() : 'Select Date'}
            </Text>
          </TouchableOpacity>

          {/* DatePicker component */}
          <DatePicker
            modal
            open={isDatePickerVisible}
            date={date}
            mode="date"
            onConfirm={(selectedDate) => {
              setDate(selectedDate);  // Update selected date
              setIsDatePickerVisible(false); // Hide the date picker
            }}
            onCancel={() => setIsDatePickerVisible(false)} // Cancel and hide the date picker
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
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#52b865',
  },
  tabText: {
    color: '#333',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'white',
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
