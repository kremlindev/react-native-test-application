import React from 'react';
import { Button, View, Text, Image, ScrollView, TextInput } from 'react-native';

function br() {
  <Text> </Text>
}
const TestApplication = () => {
  return (
    <ScrollView style={{
      alignItems: "center",
      color: "white",
      backgroundColor: "black"
    }}>
      <View>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Text style={{
        color: "white",
        fontSize: 50,
        fontStyle: "bold",
        borderColor: "white",
        borderRadius: 5,
        fontFamily: "Tahoma",
        paddingLeft: 55
      }}> Dude Plz </Text>
      <br/>
        <Image
          source={{
            uri: 'https://shutplea.se/',
          }}
          style={{ 
        paddingLeft: "10px",
        justifyContent: "center",
        alignItems: "center",
        width: 343,
        height: 343
        }}
        />
        <br/>
              <Text style={{
        color: "white",
        fontSize: 50,
        fontStyle: "bold",
        borderColor: "white",
        borderRadius: 5,
        fontFamily: "Tahoma",
        paddingLeft: 65
      }}> Plz sdfu </Text>
      <br/>
      <br/>
      </View>
    </ScrollView>
  );
}

export default TestApplication;