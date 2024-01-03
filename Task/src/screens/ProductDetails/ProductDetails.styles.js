import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  deatilsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButton: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#F8F9FB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  deatilsContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
 
  slide: {
    height: 300, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
