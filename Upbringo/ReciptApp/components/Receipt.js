
import React,{useState} from 'react';
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



const Receipt = () => {
    // 
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [dnt, setDnt] = useState('');
    const [iname, setIName] = useState('');
    const [quan, setQuan] = useState('');
    const [price, setPrice] = useState('');
    const [dis, setDis] = useState('');
    const [gst, setGst] = useState('');
    const [tm, setTm] = useState('');
    const [tmp, setTmp] = useState('');
    const [change, setChange] = useState(false);
    const [edit,setEdit] = useState(true);
    // 
    return (
      <ScrollView>
      <View style={styles.h1}> 
          <View >
            <Text style={styles.h2}>Create A Invoice</Text>
            <TextInput placeholder='Buyer Name' style={styles.dat} editable={edit} onChangeText={newText => setName(newText)}/> 
            <TextInput keyboardType='numeric' placeholder='Mobile No' style={styles.dat} editable={edit}
          onChangeText={newText => setNum(newText)} /> 
            <TextInput keyboardType='numeric' placeholder='date and time'style={styles.dat} editable={edit}
          onChangeText={newText => setDnt(newText)}/>
          </View>
          <View>
            
            <TextInput placeholder='Item Name' style={styles.dat} editable={edit}
          onChangeText={newText => setIName(newText)}/> 
            <TextInput placeholder='Quantity' keyboardType='numeric'style={styles.dat} editable={edit}
          onChangeText={newText => setQuan(newText)}/> 
            <TextInput placeholder='Price per quantity'keyboardType='numeric'style={styles.dat} editable={edit}
          onChangeText={newText => setPrice(newText)} /> 
            <TextInput placeholder='Discount(excluding GST)'keyboardType='numeric'style={styles.dat} editable={edit}
          onChangeText={newText => setDis(newText)}/> 
            <TextInput placeholder='GST' keyboardType='numeric'style={styles.dat} editable={edit}  onChangeText={newText => setGst(newText)}/> 
            <TextInput placeholder='Total Amount of  item ( including GST )'keyboardType='numeric'style={styles.dat} editable={edit}
          onChangeText={newText => setTm(newText)}/> 
            <TextInput placeholder='Total ( overall amount to be paid )'keyboardType='numeric'style={styles.dat}  editable={edit}
        onChangeText={newText => setTmp(newText)}/>
          </View>
          <View>
          <Button
            title="Submit"
            color="#841584"
            marginBottom="10px"
            onPress={() => {
          setChange(true);
          setEdit(false);
        }}
          />
          </View>
          {change &&
          <DataTable  style={styles.add}>
    <Text style={styles.h3}>Invoice</Text>
    <View style={styles.shop}>
        <Text style={styles.title}>Upbringo Store</Text>
        <Text style={styles.title}>Near Gautam Nagar</Text>
        <Text style={styles.title}>MirZapur-431605</Text>
      </View>
    
      

      <DataTable.Row>
        <DataTable.Cell style={styles.data}> Buyer Name</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{name}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Mobile No</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{num}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>date and time</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{dnt}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Item Name</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{iname}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Quantity</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{quan}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Price per quantity</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{price}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Discount(excluding GST)</DataTable.Cell>
        <DataTable.Cell style={styles.data}  numeric>{dis}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>GST</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{gst}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Total Amount of that item ( including GST )</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{tm}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Total ( overall amount to be paid )</DataTable.Cell>
        <DataTable.Cell style={styles.data} numeric>{tmp}</DataTable.Cell>
      </DataTable.Row>
      <Button
            title="Edit"
            color="#841584"
            marginBottom="10px"
            onPress={() => {
          setChange(false);
          setEdit(true);
        }}
          />
    </DataTable>}
      </View>
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    h1:{
    // padding :70,
    backgroundColor:'#00A568',
    color:'#f8f9fa',
    fontSize:20,
    
    }
    ,h2:{
      // padding:50,
      textAlign:'center',
      fontSize:30,
      color:'#f8f9fa',
    },
    dat:{
      // borderColor:'black',
      // borderWidth:2,
      padding:10,
      color:'#C2C3C5',
      fontSize:15,
    },
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
      width:420,
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
  
  
  export default Receipt;