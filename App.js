import React from 'react';
import {View} from 'react-native';
import Header from './src/components/header';
import SearchInput from './src/components/SearchInput';
import ImageCard from './src/components/ImageCard';
import unsplash from './api/unsplash';

class App extends React.Component {
  
  state={images:[],value:2};

  onValueSubmit= async(search) => {
    const response=await unsplash.get('/search/photos',
    {
        params:{
            query:search,
            per_page:100,
            orientation:'squarish'
        }
    
    });
    this.setState({images:response.data.results});
    
  };

  onValueSelect = (value) => {

this.setState({value})
  }

  
  
  render(){
   
    return (
      <View>
       
       <Header headerText= 'Imagify' onSelect={this.onValueSelect}/>
       <SearchInput onSubmit={this.onValueSubmit}/>
       <ImageCard images={this.state.images} value={this.state.value}/>
       
       </View>
      
    )
    }
}

export default App;




