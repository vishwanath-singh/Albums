import React from 'react';
import {View,NetInfo,AsyncStorage} from 'react-native';
import Header from './src/components/header';
import SearchInput from './src/components/SearchInput';
import ImageCard from './src/components/ImageCard';
import unsplash from './api/unsplash';

class App extends React.Component {

  state={images:[],value:2,isConnected:true,storage:[],page_no:1};

  componentDidMount(){
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  onValueSubmit= async(search) => {
    const response=await unsplash.get('/search/photos/',
    {
        params:{
            query:search,
            page:this.state.page_no,
            per_page:30,
           
        }
    
    });
    this.setState({images:response.data.results});
    
    try{
      await AsyncStorage.setItem(search,JSON.stringify(this.state.images))
  } catch (error) {
      //Error saving data
  }
     
    
  };

  onValueSelect = (value) => {

this.setState({value})
  }

  onScrollMore=(page_no) => {
this.setState({page_no})
  }

    
       retrieveData = async(search) => {
        try {
         const storage = await JSON.parse(AsyncStorage.getItem(search));
          if (storage !== null) {
           this.setState({storage})
          }
        
          
        } catch (error) {
          // Error retrieving data
        }
      };

  
  
  render() {
   if(this.state.isConnected){
    return (
      <View>
           <Header headerText= 'Imagify' onSelect={this.onValueSelect}/>
       <SearchInput onSubmit={this.onValueSubmit} />
       <ImageCard images={this.state.images} value={this.state.value} onScroll={this.onScrollMore}/>
        
       </View>
      )
     
   }

   else return (
     <View>
       <Header headerText= 'Imagify' onSelect={this.onValueSelect}/>
       <SearchInput onSubmit={this.retrieveData}/>
       <ImageCard images={this.state.storage} value={this.state.value} onScroll={this.onScrollMore}/>
     </View>
   )
    }
}

export default App;




