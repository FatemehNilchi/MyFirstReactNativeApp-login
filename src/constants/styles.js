import {StyleSheet} from 'react-native';

const mainStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fffBFC',
    paddingTop: 43,
    paddingHorizontal: 25,
    paddingBottom: 25,
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  centeredContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainHeaderText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
    marginBottom: 13,
  },
  subHeaderText: {
    fontSize: 13,
    color: '#000',
    marginBottom: 30,
  },
  haveAnAccountText: 
  {fontSize: 12,
     color: '#000',
      marginRight: 3
    },
  switchAuthText: {
    fontSize: 11,
    color: '#DC1F26',
  },
});
export default mainStyles;
