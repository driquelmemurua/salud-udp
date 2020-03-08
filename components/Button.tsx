import React from 'react';
import { View, Text, TouchableHighlight} from 'react-native';
import { styles } from '../styles';

function Button({text, onPress, viewStyle={},type}) {
  const buttonStyle=()=>{
    switch (type){
      case 'PRIMARY': 
        return { 
          _viewStyle: {...styles.fixToText, ...viewStyle},
          underlayColor: 'white',
          textStyle: styles.primaryButton
        }
        case 'TAG': 
        return { 
          _viewStyle: {...styles.fixToText, ...viewStyle},
          underlayColor: 'white',
          textStyle: styles.button
        }
        case 'PRESSED_TAG': 
        return { 
          _viewStyle: {...styles.fixToText, ...viewStyle},
          underlayColor: 'white',
          textStyle: styles.pressedTagbutton
        }
      default:
        return { 
          _viewStyle: {...styles.fixToText, ...viewStyle},
          underlayColor: 'white',
          textStyle: styles.button
        }
    }
  }
  const {_viewStyle, underlayColor, textStyle} = buttonStyle();
  
  return (
    <View style={_viewStyle}>
      <TouchableHighlight onPress={onPress} underlayColor={underlayColor} >
        <Text style={textStyle}>
          {text}
        </Text>
      </TouchableHighlight>
    </View>

  );
}

export default Button;