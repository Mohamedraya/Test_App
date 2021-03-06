import React ,{useEffect}from "react";
import {FlatList,SafeAreaView} from "react-native";
import { useSelector , useDispatch } from "react-redux";
import {getUsers} from "../../redux/actions/userActions";
import { useNavigation } from "@react-navigation/native";
import ListItem from "../ListItem";
import ListItemSperator from "../ListItemSperator";
import {loadMoreItem} from "../../redux/api/usersApi";
//import axios from "axios";
//import styles from "./styles";



function Home () {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getUsers());
    } , []);
    
    const users   = useSelector(state => state.usersReducer.users);
    const navigation = useNavigation();


    
    //const [users,setUsers] = useState([]);
    //const [currentPage,setCurrentPage] = useState(1);
    //const [isLoading,setIsLoading] = useState(false);
    


    
    /*const renderLoader = () => {
        return (
            isLoading ?
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#aaa"/>
            </View> : null
        );
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };
     

    /*const getUsers = () => {
        setIsLoading(true);
        axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`)
             .then(res => {
                 setUsers([...users,...res.data.results]);
                 setIsLoading(false);
             });
    }*/

    

    return (
      <SafeAreaView>  
        <FlatList data={users} keyExtractor={item => item.email} ListItemSperator={ListItemSperator}
          renderItem={({item}) => 
                (<ListItem image={item.picture.large} name={item.name.first}
                           email={item.email} onPress={()=>{navigation.navigate("DetailsScreen",{itemPicture:item.picture.large,itemName:item.name.first,itemEmail:item.email} );}}/>)}
            onEndReached={loadMoreItem}
          onEndReachedThreshold={0}                                
                           />
                         
      </SafeAreaView>
    );
}

export default Home;