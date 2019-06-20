  import React from 'react';
  import {View,FlatList,StyleSheet,Text,Modal,TouchableHighlight,Alert} from 'react-native';
  import {Image} from 'react-native-elements';

  class ImageCard extends React.PureComponent {

    state={page_no:1,modalVisible:false}

    renderItem =({item}) =>(
      <View style={{flex: 1,flexDirection:'column', margin:1 }}>
        <View >
          <TouchableHighlight onPress={() => {
                      this.props.modalMethod(item.urls.regular);
                    }}>
            <Image
                style={{height:100}}
                source={{uri: item.urls.regular}}
              />
          </TouchableHighlight>
        </View>
      </View>            
    );

  loadMore = () => {
    let page=this.state.page_no+1;
    this.setState({page_no:page})
    this.props.onScroll(page)
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
      
        
  })

  export default ImageCard;