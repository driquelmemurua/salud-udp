import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19B5B5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  heading: {
    paddingBottom: 40,
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 14,
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
    justifyContent: 'space-between'
  }
});