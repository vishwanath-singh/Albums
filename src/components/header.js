    import React from 'react';
    import {Text, StyleSheet,View,Picker} from 'react-native';


    class Header extends React.Component {
    state={gridValue:2}

    onValueChange = (itemValue, itemIndex) => {
            this.props.onSelect(itemValue)
            this.setState({gridValue:itemValue})
    
    }

    render(){
        return (
            <View>
            <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{this.props.headerText}</Text>
    </View>
    <Picker 
    selectedValue={this.state.gridValue}
    style={{height: 50, width: 150}}
    onValueChange={ this.onValueChange}
    >
    <Picker.Item label="Grid 2" value="2" />
    <Picker.Item label="Grid 3" value="3" />
    <Picker.Item label="Grid 4" value="4" />

    </Picker>
    </View>
        );
        }
    };

    const styles= StyleSheet.create({
    viewStyle:{
        backgroundColor:'#F8F8F8',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:15,
        height:60,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        position:'relative'
        },
        
        textStyle: {
            fontSize:20,
            paddingTop:5
        },
        
    });

    export default Header;