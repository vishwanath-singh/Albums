import React from 'react';
import {View,FlatList,StyleSheet,TouchableOpacity,Text} from 'react-native';
import {Image} from 'react-native-elements';

class ImageCard extends React.PureComponent {

   state={page_no:1}

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

loadMore = () => {
  let page=this.state.page_no+1;
  this.setState({page_no:page})
  this.props.onScroll(this.state.page_no)
}


    render(){
        
        return (
         <FlatList 
       data={this.props.images}
       renderItem={this.renderItem}
       keyExtractor={(item,index) =>item.id}
       key={this.props.value}
       numColumns={this.props.value}

       onEndReached={this.loadMore}
       onEndReachedThreshold={0.9}
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
        
        height: 100,
      
      }
})

export default ImageCard;