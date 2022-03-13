import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
}from 'react-native' 

const Tab = () => {
  return (
    
    <DataTable  style={styles.add}>
    <Text style={styles.h1}>Invoice</Text>
    <View style={styles.shop}>
        <Text style={styles.title}>Upbringo Store</Text>
        <Text style={styles.title}>Near Gautam Nagar</Text>
        <Text style={styles.title}>MirZapur-431605</Text>
      </View>
    
      

      <DataTable.Row>
        <DataTable.Cell style={styles.data}> Buyer Name</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>Nagsen Waghmare</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Mobile No</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>9689470915</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>date and time</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>13/03/22 Time :15:27</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Item Name</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>Apple</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Quantity</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>5</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Price per quantity</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>30</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Discount(excluding GST)</DataTable.Cell>
        <DataTable.Cell style={styles.data}  numeric>0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>GST</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>10</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Total Amount of that item ( including GST )</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>160</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Total ( overall amount to be paid )</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>160</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  h3:{
    textAlign:'center',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#42cef5',
    fontSize:20,
    padding:50,
    fontSize:50,
    color:'white',
    width:300,
  },
  top:{
    height:150,
    color:'grey',
  },
  shop:{
    textAlign: 'left',
    alignItems: 'flex-start',
    marginLeft: 2,
    marginBottom:20,
  },
  data:{
    borderColor:'black',
    borderWidth:2,
    padding:10,
    color:'white',
    fontSize:50,
  },
  add:{
    backgroundColor:'#42cef5',
  },
  title:{
    textAlign: 'left',
    color: 'white',
    fontSize: 18,
    marginLeft:15,
    marginBottom:0,
  },
})
export default Tab;