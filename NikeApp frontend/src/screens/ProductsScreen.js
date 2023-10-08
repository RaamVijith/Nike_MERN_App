import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice} from '../store/productsSlice';

const ProductsScreen=({navigation})=>{
 // const navigation = useNavigation();

 const dispatch = useDispatch();

const products = useSelector(state => state.products.products);

    return(
        <View style={styles.container}>

        <FlatList
           data={products}
           renderItem={({ item }) => (
            <Pressable 
                        onPress={() => {
                        // update selected product
                         dispatch(productsSlice.actions.setSelectedProduct(item.id));

                        navigation.navigate('Product Details');
                          }}
                          style={styles.itemContainer}
                        >
                <Image source={{ uri: item.image }} style={styles.image} />
              </Pressable>
          )}
          numColumns={2}
        />
  
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width:'100%',
      aspectRatio:1
    },
    itemContainer:{
      width: "50%", 
      padding: 1
    }
  });

  export default ProductsScreen