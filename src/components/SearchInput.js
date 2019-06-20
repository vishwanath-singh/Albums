import React from 'react';
import {View} from 'react-native';


import {SearchBar} from 'react-native-elements';

class SearchInput extends React.Component{
    state={search:''};

   onSearchSubmit = () => {
    this.props.onSubmit(this.state.search);
   }

    render(){
      const {search} = this.state;
      return (
        <View>        
          <SearchBar
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Type Here..."
          onChangeText={(text) => this.setState({search: text})}
          value={search}
          onSubmitEditing={this.onSearchSubmit}
          
        />
    </View>

        
      );
    }
}

export default SearchInput;