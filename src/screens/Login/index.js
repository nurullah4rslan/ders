import {Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../assets';

const Login = () => {
  return (
    <SafeAreaView style={Style.background}>
      <View style={Style.titleTextBar}>
        <View style={Style.titleBar}>
          <Text style={Style.titleText}>Login here</Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.titleBar}>
          <Text style={Style.descriptText}>
            Welcome back you've been missed!
          </Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.textArea}>
          <Text style={Style.textAreaDes}>Email</Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.textAreaDefault}>
          <Text style={Style.textAreaDes}>Password</Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.forgotPass}>
          <Text style={Style.forgotPassText}>Forgot your Password?</Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.button}>
          <Text style={Style.buttonText}>Sign in</Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.createBar}>
          <Text style={Style.createText}>Create new account</Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.orTextBar}>
          <Text style={Style.orText}>Or continue with</Text>
        </View>
      </View>
      <View style={Style.titleTextBar}>
        <View style={Style.buttonBar}>
          <View style={Style.buttonImage}>
            <Image style={Style.icon} source={Icons.google} />
          </View>
          <View style={Style.buttonImage}>
            <Image style={Style.icon} source={Icons.facebook} />
          </View>
          <View style={Style.buttonImage}>
            <Image style={Style.icon} source={Icons.apple} />
          </View>
        </View>
      </View>
      <View>
        <Image source={Images.wallpaper} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
