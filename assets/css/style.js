import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    tinyLogo: {
      width: 200,
      height: 50,
      left: 30,
      textAlign:'center',
    },
      container: {
        flex: 1,
        },
        secondaryContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        textAlign: 'center'
        },
        containerHeader: {
          flexDirection: 'row',
          gap: 40,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }
  });

  export default styles;