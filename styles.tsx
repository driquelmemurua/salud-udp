import { StyleSheet, Dimensions} from 'react-native';

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
  autoCompleteInput: {
    width: '90%',
    height: 40, 
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'white', 
    borderWidth: 1
  },
  autoCompleteIcon: {
    width: '10%',
    height: 40, 
    marginTop:10,
    marginLeft:15, 
    marginRight:15
  },
  autoCompleteInputFilter: {
    width: '80%',
    height: 40, 
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'white', 
    borderWidth: 1
  },
  autoCompleteIconFilter: {
    width: '15%',
    height: 40, 
    marginStart:'5%',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:'4%',
    paddingRight:'4%',
    borderColor:'white',
    borderWidth:1,
    borderRadius:1,
  },
  autoCompleteIconFilterSelected: {
    width: '15%',
    height: 40, 
    marginStart:'5%',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:'4%',
    paddingRight:'4%',
    backgroundColor: 'white',
    borderColor:'white',
    borderWidth:1,
    borderRadius:1,
  },
  containerFlatList: {
    width:'80%',
    marginTop: 5,
  },
  containerFilter: {
    maxHeight: Dimensions.get('window').height*0.6,
    width: '80%',
    marginTop: '5%',
    backgroundColor: '#19B5B5',
    borderColor:'white',
    borderWidth:1,
    borderRadius:1,
    padding:10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonGroup:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  button: {
    fontSize:14,
    padding:8,
    color:'white',
    backgroundColor:'#47C4C4',
    borderColor: 'white',
    borderWidth:1,
    borderRadius:4,
  },
  primaryButton: {
    fontSize:16,
    padding:8,
    color:'white',
    backgroundColor:'#19B5B5',
    borderColor: 'white',
    borderWidth:2,
    borderRadius:4,
  },
  tagContainer: {
    paddingTop:2,
    paddingBottom:2,
    paddingLeft:4,
    paddingRight:8,
    marginTop:6,
    marginRight:6,
    backgroundColor:'#19B5B5',
    borderColor: 'white',
    borderWidth:1,
    borderRadius:12,
  },
  tagGroup:{
    width:'80%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'flex-start'
  },
  fileItemContainer: {
    padding:10,
    marginTop:8,
    marginBottom:4,
    backgroundColor:'#47C4C4',
    flexDirection:'row'
  },
  fileText: {
    marginTop:2,
    paddingRight:8,
    paddingLeft:8,
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
});