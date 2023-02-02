import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled13 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: "column",
      height: "100%",
      padding: 10,
      backgroundColor: "#f0f0f1"
    }}>
        
          <View style={styles.column1}><ImageBackground style={styles.EzHaamnn} source={require("./escudo.png")} resizeMode="cover"></ImageBackground></View>
          
          <View style={styles.column3}>
            <View style={styles.ptDrtkuu}>
              <View style={styles.qnbohKVc}></View>
              <View style={styles.NkiGxCuy}>
                <Text style={styles.weoTaTti}>START</Text>
              </View>
              
              <View style={styles.ibfapgen}></View>
            </View><View style={styles.OVrJPOPc}><Text style={styles.UkWtlNyI}>Lorem ipsum…</Text></View></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 4
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  EzHaamnn: {
    width: 336,
    height: 405
  },
  ptDrtkuu: {
    height: 60,
    width: 176,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
    alignItems: "center"
  },
  OVrJPOPc: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  weoTaTti: {
    width: 47,
    height: 26,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  UkWtlNyI: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NkiGxCuy: {
    flex: 1
  },
  qnbohKVc: {
    flex: 1
  },
  ibfapgen: {
    flex: 1
  }
});
export default Untitled13;