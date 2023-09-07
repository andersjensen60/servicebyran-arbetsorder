import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const MainComponent = () => {
        
    
    const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
    const [show, setShow] = useState(false); // add this state
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [customerInfo, setCustomerInfo] = useState('');
    const [workOrder, setWorkOrder] = useState('');

  return (
    <ScrollView style={styles.main}>
        
        <Text style={styles.label}>Datum</Text>
      <TextInput
        style={styles.formControl}
        placeholder="Datum"
        value={date}
        onChangeText={setDate}
      />
      
      <Text style={styles.label}>Avsändare</Text>
      <Picker
        selectedValue={sender}
        style={styles.formControl}
        onValueChange={(itemValue, itemIndex) => setSender(itemValue)}
      >
        <Picker.Item label="Timo Kappas" value="timo@servicebyran.com" />
        <Picker.Item label="Anders Jensen" value="anders@servicebyran.com" />
      </Picker>
      
      <Text style={styles.label}>Mottagare</Text>
      <Picker
        selectedValue={receiver}
        style={styles.formControl}
        onValueChange={(itemValue, itemIndex) => setReceiver(itemValue)}
      >
        <Picker.Item label="Timo Kappas" value="timo@servicebyran.com" />
        <Picker.Item label="Anders Jensen" value="anders@servicebyran.com" />
      </Picker>

      <Text style={styles.label}>Kundinformation</Text>
      <TextInput
        style={[styles.formControl, {height: 100}]}
        multiline
        rows={5}
        placeholder="Kundinformation"
        onChangeText={setCustomerInfo}
        value={customerInfo}
      />

      <Text style={styles.label}>Arbetsorder</Text>
      <TextInput
        style={[styles.formControl, {height: 100}]}
        multiline
        rows={7}
        placeholder="Arbetsorder"
        onChangeText={setWorkOrder}
        value={workOrder}
      />

      <Pressable style={styles.btnCustom} onPress={() => {
        // Handle your form submission here
      }}>
        <Text style={styles.btnCustomText}>Skicka</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  label: {
    color: '#5784c4',
    fontSize: 11,
    fontWeight: 'bold',
  },
  formControl: {
    padding: 3,
    borderWidth: 0.3,
    borderColor: '#5784c4',
    borderRadius: 5,
    marginBottom: 10,
  },
  btnCustom: {
    width: '100%',
    backgroundColor: '#5784c4',
    borderRadius: 4,
    padding: 8,
    marginBottom: 20,
  },
  btnCustomText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MainComponent;