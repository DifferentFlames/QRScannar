
import React, {useState} from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { RNCamera } from "react-native-camera";

function App () {
  const [barcode, setBarcode] = useState(null);
return(
<View style={{flex: 1,backgroundColor: '#F2F2FC',}}>
  <SafeAreaView >
    <View style={{height: 50,backgroundColor: 'green',alignItems: 'center',justifyContent: 'center'}}>
      <Text style={{color: '#ffffff',fontSize: 20}}>React Native Scanner</Text>
    </View>
  </SafeAreaView>
   {barcode ?
   (<View style={{flex: 1,width: '90%',alignSelf: 'center',justifyContent: 'center',alignItems: 'center',backgroundColor: '#eeeeee'}}>
      <Text style={{fontSize:20, color:"black"}}>{barcode.data}</Text>
    </View>
    ):(
    <RNCamera
    style={{ flex: 1, alignItems:'center'}}
    onBarCodeRead={(data) => {
      if(data.type === "QR_CODE"){
        console.log(data),
        setBarcode(data)
      }else{
        throw new Error("This is not a QR-CODE");
      }
    }}
    />
    )}
    <View style={{height: 180, justifyContent: 'center',alignItems: 'center'}}>
    <TouchableOpacity style={{width: 240,borderRadius: 4,backgroundColor: 'green',paddingHorizontal: 24,paddingVertical: 12,marginVertical: 8}} 
    onPress={() => setBarcode(null)}>
      <Text style={{fontSize: 18,color: '#ffffff',textAlign: 'center'}}>New QR Scan</Text>
    </TouchableOpacity>
  </View>
    
</View>
);
}


export default App