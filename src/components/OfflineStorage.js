        import React from 'react';
        import {AsyncStorage} from 'react-native';

        class OfflineStorage extends React.Component {

            loadData =async() =>{
                await AsyncStorage.setItem(this.props.term,JSON.stringify((this.props.images)))
            }

            retrieveData = async() =>{
                try{
                const storage =  JSON.parse(await AsyncStorage.getItem(this.props.term));
                if (storage !== null) {
                    this.props.onDataFetch(storage)
                }
                }catch{
                    //Error retreiving data
                }

            }

            render(){
                if(this.props.isConnected){
                this.loadData();
                return null    
            }
                else {
                    this.retrieveData();
                    return null
                }

                
            }
        }

        export default OfflineStorage;