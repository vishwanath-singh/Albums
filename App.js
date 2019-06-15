import React from 'react';
import {View} from 'react-native';
import Header from './src/components/header';
import SearchInput from './src/components/SearchInput';
import ImageList from './src/components/ImageList';
import unsplash from './api/unsplash';

class App extends React.Component {
  
  state={images:[]};

  onValueSubmit= async(search) => {
    const response=await unsplash.get('/search/photos',
    {
        params:{
            query:search
        }
    
    });
    this.setState({images:response.data.results});
    console.log(this.state.images.length);
  };
  
  render(){
    return (
      <View>
       <Header headerText= 'Imagify'/>
       <SearchInput onSubmit={this.onValueSubmit}/>
       <ImageList images={this.state.images}/>
       </View>
      
    )
    }
}

export default App;




