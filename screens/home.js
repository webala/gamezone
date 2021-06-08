import React, {useState} from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const Home = ({ navigation }) => {

    // const pressHandler = () => {
    //     //navigation.navigate('ReviewDetails')
    //     navigation.push('ReviewDetails');
    // }

    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'}
    ]);
    
        return (
            <View style={globalStyles.container}>
                <FlatList 
                data={reviews}
                renderItem={({ item }) =>(
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </TouchableOpacity>
                    )}
                />






                {/* <Button title="Go to review details" onPress={pressHandler}/> */}
            </View>
        )
    }
  
export default Home;