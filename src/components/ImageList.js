import React from 'react';
import ImageCard from './ImageCard';
import {View,Text} from 'react-native';

const ImageList= (props) => {
    const images=
    props.images.map((image) =>{
        return <ImageCard key={image.id} image={image} />
    });

return (
<View>
{images}
</View>)
        
    }


export default ImageList;