import  React,{Component} from 'react';
import { View, Text,ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { ListItem ,Card} from 'react-native-elements';
import {PARTNERS} from '../shared/partners';

function Mission()
{

    return(
         <Card title = "Our Mission">
         <Text style={{margin: 10}}> 
               We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web
            </Text>
         </Card>   
    );
}

class About extends Component
{
    constructor(props)
     {
        super(props);
        this.state = 
        {
         partners:PARTNERS 
        };
    }
    static navigationOptions = {title: 'About Us'};


    render()
    {

        const renderPartner = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                
               leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
            />
            );
           }
           return (
               <ScrollView>
               <Mission/>
               <Card title= "Community Partners">
               <FlatList
            data={this.state.partners}
            renderItem={renderPartner}
            keyExtractor={item => item.id.toString()}/>
            </Card>
           </ScrollView>

           );
        
    }
}

export default About;
