import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic'

const dynamicStyles = new DynamicStyleSheet({
	container: {
		flex: 1,
		height: "100%"
	},
	safeAreaProvider:{
	  backgroundColor: new DynamicValue('#EEEEEE','#2d2d2d'),
	},
	bg:{
	  backgroundColor: new DynamicValue('#EEEEEE','#2d2d2d'),
	}
  
  });

export default  dynamicStyles;