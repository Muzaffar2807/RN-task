import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cartContainer: {
    paddingHorizontal: 24,
    marginVertical: 22,
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

  cartHeading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 45,
  },

  cartItems: {
    borderBottomWidth: 2,
    borderColor: '#EBEBFB',
    paddingBottom: 25,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
  },

  cartItemNames: {
    display: 'flex',
    paddingLeft: 20,
    alignContent: 'center',
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginLeft: 'auto',
  },

  checkoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 300,
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
  },

  priceHeadingText: {
    fontSize: 14,
    color: '#616A7D', 

  },

  priceText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#1E222B',
  },
});
