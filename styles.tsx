import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#19B5B5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80
  },
  heading: {
    paddingBottom: 40,
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 14
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    paddingVertical: 2,
    textAlign: 'center'
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 2,
    textAlign: 'center'
  },
  menuItem: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 12
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingLeft: 2,
    paddingBottom: 6,
    marginVertical: 8
  },
  logo: {
    width: 250,
    height: 70,
    resizeMode: 'contain'
  },
  contactList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  emergencyContactList: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10
  },
  phoneNumber: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth:2,
    borderRadius:4,
    padding:6

  },
  accidentesItem: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 12
  },
  containerWebView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  loginWebView: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20
  },
  autoComplete: {
    width: '90%',
    height: 40, 
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'white', 
    borderWidth: 1
  },
  containerFlatList: {
    width:'80%',
    marginTop: 5,
  }
});