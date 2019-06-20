import React from 'react';
import {View,NetInfo,Modal,TouchableHighlight} from 'react-native';
import Header from './src/components/header';
import SearchInput from './src/components/SearchInput';
import ImageCard from './src/components/ImageCard';
import OfflineStorage from './src/components/OfflineStorage';
import unsplash from './api/unsplash';
import {Image} from 'react-native-elements';

class App extends React.Component {
  
  state={
     images:[],
     value:2,
     isConnected:true,
     page_no:1,
     term:'',
     modalUri: '',
     modalVisible: false,
   };

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

  changeModalUri = (uri) => {
     this.setState({modalUri: uri});
     this.setState({modalVisible: true});
  }

  onValueSubmit= async(search) => {
    if(this.state.term!==search) {
      this.setState({images:[]})
    }
    
    const response=await unsplash.get('/search/photos/',
    {
        params:{
            query:search,
            page:this.state.page_no,
            per_page:15
           
        }
    
    });
    this.setState({term:search})

     this.setState({
          images:this.state.images.concat(response.data.results)
       })
    
};

  onValueSelect = (value) => {this.setState({value})}

  onScrollMore=(page_no) => {
this.setState({page_no});
this.onValueSubmit(this.state.term);
}

    
  onOfflineSubmit = (search) => { this.setState({term:search}) }
  
  FetchData = (storage) => { this.setState({images:storage}) }

  render() {
   if(this.state.isConnected){
    return (
      <View>
           <Header headerText= 'Imagify' onSelect={this.onValueSelect}/>
       <SearchInput onSubmit={this.onValueSubmit} />
       <ImageCard images={this.state.images} value={this.state.value} onScroll={this.onScrollMore} modalMethod={this.changeModalUri}/>
       <OfflineStorage images={this.state.images}  term={this.state.term} isConnected={this.state.isConnected}/>
      
       <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
         this.setState({modalVisible:!this.state.modalVisible});
      }}>
        <TouchableHighlight onPress={() => {
          this.setState({modalVisible:!this.state.modalVisible});
        }}>
          <View style={{flex:1,alignContent:'center',justifyContent:'center',position:'relative',top:250}}>
            <Image 
            style={{height:200}}
            source={{uri: this.state.modalUri}}/>
          </View>
        </TouchableHighlight>
      </Modal>
       </View>
      )
     
   }

   else return (
     <View>
       <Header headerText= 'Imagify' onSelect={this.onValueSelect}/>
       <SearchInput onSubmit={this.onOfflineSubmit}/>
       <ImageCard images={this.state.images} value={this.state.value} onScroll={this.onScrollMore} modalMethod={this.changeModalUri}/>
      <OfflineStorage term={this.state.term} isConnected={this.state.isConnected} onDataFetch={this.FetchData}/>
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
         this.setState({modalVisible:!this.state.modalVisible});
      }}>
        <TouchableHighlight onPress={() => {
          this.setState({modalVisible:!this.state.modalVisible});
        }}>
          <View style={{flex:1,alignContent:'center',justifyContent:'center',position:'relative',top:250}}>
            <Image 
             style={{height:200}}
             source={{uri: this.state.modalUri}}/>
          </View>
        </TouchableHighlight>
      </Modal>
     </View>
   )
    }
}

export default App;




