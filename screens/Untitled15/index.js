import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled15 = ({
  navigation
}) => {
  const universitiesapi_response_get_Search = useSelector(state => state.universitiesapi_response_get_Search);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ActivityIndicator style={styles.rGtVDjTD}></ActivityIndicator><CheckBox style={styles.hhHgbHEV} title="Checkbox Title"></CheckBox>
          
          <Pressable onPress={() => navigation.navigation.navigate("Untitled16", {
        "greeting": "hello",
        "userCountry": universitiesapi_response_get_Search.country
      })}>
            <View style={styles.XjNbnLlW}></View>
          </Pressable>
        
        </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  rGtVDjTD: {
    width: 50,
    height: 50
  },
  hhHgbHEV: {
    width: 183,
    height: 69
  },
  XjNbnLlW: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled15;