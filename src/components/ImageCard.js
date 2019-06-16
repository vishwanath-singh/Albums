import React from 'react';
import {View,FlatList,StyleSheet,TouchableOpacity,Text} from 'react-native';
import {Image} from 'react-native-elements';

class ImageCard extends React.PureComponent {

    renderLoader(){
        if(this.props.images==[])
        <Text>Loading...</Text>
    }

renderItem =({item}) =>(
    
    <TouchableOpacity style={styles.MainContainer}>
    
    <View style={{flex: 1, flexDirection: 'column', margin: 1 }}>
            <Image
                  style={styles.imageThumbnail}
                  source={{uri: item.urls.regular}}
                />
                </View>
                </TouchableOpacity>
            
);


    render(){
        
        this.renderLoader();
    return (
         <FlatList 
       data={this.props.images}
       renderItem={this.renderItem}
       keyExtractor={(item,index) =>item.id}
       numColumns={2}
       />
      
    )
    }
}

const styles= StyleSheet.create({

    MainContainer:{
        justifyContent: 'center',
        flex: 1,
        paddingTop: 10,
      },
    
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
      
      }
})

export default ImageCard;