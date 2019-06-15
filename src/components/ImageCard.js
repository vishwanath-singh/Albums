import React from 'react';
import {View,Image} from 'react-native';

const ImageCard = (props) => {
    return (
        <View>
<Image
          style={{width: 50, height: 50}}
          source={{uri: props.image.urls.regular}}
        />
        </View>
    )
}

export default ImageCard;