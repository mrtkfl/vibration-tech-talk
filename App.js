import React from 'react';
import { StyleSheet, Text, Button, Vibration, View } from 'react-native';

export default function App() {


  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];



  return (
  <View style={styles.container}>
      <Text>BZZZZZZZ</Text>

      <View>
        <Button
          title="Vibrate once" 
          onPress={()=>Vibration.vibrate()} />
      </View>

      <View>
        <Button
          title="Vibrate in Pattern" 
          onPress={()=>Vibration.vibrate(PATTERN, true)} />
      </View>

      <View>
        <Button
          title="Please stop" 
          onPress={()=>Vibration.cancel()} />
      </View>

      


      

      

      
      
      
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
