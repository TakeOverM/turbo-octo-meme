import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  import colors from "../style/color";
  import RoundedButton from "../components/buttons/RoundedButton";
  
  export default class LoggedOut extends Component { 
   render() {
      return (
        <View style={styles.wrapper}> 
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require("../img/plant.png")}
          />
          <Text style={styles.welcomeText}>
            Welcome to GreenThumb
          </Text>
          <RoundedButton 
          text="Sign in"
          color={colors.green01}
          backgroundColor={colors.white}
          />

          <RoundedButton text="Create an Account" color={colors.white} />
            <Text style={styles.hackText}>
                Created for HackMerced V, by Jesus Martinez, Bernadette Ortiz, and Eduardo Flores.
            </Text>
        </View>
      </View>
      );
    }
  }

//   const backgroundColor = background || 'transparent'
//   const color = textColor || color.black
const styles = StyleSheet.create({
wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01 
},
welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
},
logo: {
    width: 60,
    height: 110,
    marginTop: 100,
    marginBottom: 40,
    alignSelf: "center"
},
welcomeText: {
    fontSize: 30,
    textAlign: "center",
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
},
hackText: {
    justifyContent: 'flex-end',
    marginBottom: 36,
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
}
});
