import {title} from 'process';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {backgroundColor: 'white', justifyContent: 'center', flex: 1},
  titleTextBar: {
    alignItems: 'center',
  },
  titleBar: {margin: 20},
  titleText: {
    color: '#D54C1E',
    fontSize: 25,
    fontWeight: 'bold',
  },
  descriptText: {
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  textArea: {
    width: '85%',
    backgroundColor: '#F3D9BF',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D54C1E',
    margin: 16,
  },
  textAreaDefault: {
    width: '85%',
    backgroundColor: '#F3D9BF',
    padding: 20,
    borderRadius: 10,
    margin: 15,
  },
  textAreaDes: {color: 'grey', fontSize: 15},
  forgotPass: {
    width: '85%',
    alignItems: 'flex-end',
    margin: 20,
  },
  forgotPassText: {color: '#D54C1E', fontWeight: 'bold'},
  button: {
    width: '85%',
    backgroundColor: '#D54C1E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {color: 'white', fontWeight: 'bold', fontSize: 18},
  createBar: {margin: 20},
  createText: {color: 'black', fontWeight: 'bold'},
  orTextBar: {margin: 20},
  orText: {color: '#D54C1E', fontWeight: 'bold'},
  buttonBar: {flexDirection: 'row'},
  buttonImage: {
    width: 50,
    height: 40,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 3,
  },
  icon: {width: 20, height: 20, tintColor: 'white'},
});
