import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Button
  button_default: {
    backgroundColor: '#490068ff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button_secondary: {
    backgroundColor: '#058b8bff',
  },
  button_pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  button_text: {
    fontFamily: 'Times New Roman, sans-serif',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  // Menu
  menu_container: {
    flexDirection: 'row',
    backgroundColor: '#2d0040ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 3,
  },
  menu_item: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  menu_activeItem: {
    backgroundColor: '#3b0253ff',
  },
  menu_pressedItem: {
    transform: [{ scale: 0.95 }],
  },
  menu_text: {
    fontFamily: 'Times New Roman, sans-serif',
    color: '#ffffff',
    fontSize: 20,
    
  },
  menu_activeText:{
    fontWeight: 'bold'
  },

  // MovieCard
  mc_card: {
    backgroundColor: '#f1e1f8ff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
    elevation: 3,
    boxShadow: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  mc_favIcon: {
    position: 'absolute',
    top: 8,
    right: 12,
    fontSize: 24,
    color: '#058b8bff',
    zIndex: 10,
  },
  mc_content: {
    padding: 12
  },
  mc_topRow: {
    flexDirection: 'row',
    gap: 12,
  },
  mc_pressedContent: {
    backgroundColor: '#edcef9ff',
  },
  mc_image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#edcef9ff',
  },
  mc_info: {
    flex: 1
  },
  mc_title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2d0040ff'
  },
  mc_details: {
    fontSize: 14,
    color: '#514c53ff',
    marginTop: 4,
  },
  mc_rate: {
    fontSize: 14,
    color: '#cdd411ff',
    fontWeight: '700',
    marginTop: 6,
  },
  mc_review: {
    fontSize: 13,
    color: '#2c2a2dff',
    marginTop: 10,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  mc_status: {
    marginTop: 6,
    color: '#058b8bff',
    fontWeight: '600',
  },
  mc_buttonArea: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});

export default styles;
