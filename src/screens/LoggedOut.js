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
            source={require("../img/logo.jpg")}
          />
          <Text style={styles.welcomeText}>
            Welcome to Green Thumb
          </Text>
          <RoundedButton 
          text="Sign in with Facebook"
          color={colors.green01}
          backgroundColor={colors.white}
          />
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
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
},
welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
}
});