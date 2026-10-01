import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Button
  default: {
    backgroundColor: '#490068ff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondary: {
    backgroundColor: '#1e293b',
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  text: {
    fontFamily: 'Times New Roman, sans-serif',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  }
});

export default styles;
