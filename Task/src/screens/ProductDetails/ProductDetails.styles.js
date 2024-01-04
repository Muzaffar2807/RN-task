import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  deatilsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  heading: {
    fontSize: 40,
    color: '#1E222B',
    fontFamily: 'Manrope-Regular',
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

  addToFavoritesButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#F8F9FB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 8,
    padding: 10,
    borderRadius: 20,
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addToFavoritesButtonText: {
    color: '#000',
  },

  actionButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    marginVertical: 24,
  },

  actionButtons: {
    width: 160,
    height: 56,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
