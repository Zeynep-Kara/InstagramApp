import { StyleSheet, FlatList,Text , View, Pressable, Image} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
//import { SliderBox } from "react-native-image-slider-box";
import ImageSlider from 'react-native-image-slider';


function ImageSliderBox({imageArray}){       

    return(
        <View>    

            <FlatList
                horizontal
                data={imageArray}
                pagingEnabled
                disableIntervalMomentum={ true } 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image source={{uri: item}} style={styles.logo}/>
                )}
            />

            {/*   // hazır slider kütüphaneleri denedim ancak hata aldım
                  //hazır kütüphane denemeleri

                <ImageSlider images={imageArray}/>

                 <Slideshow 
              dataSource={[
                { url: imageArray[0] },
                { url: imageArray[1] },
                { url: imageArray[2] }
            ]}/>
            */}
            
            
        </View>        
    );
}

export default ImageSliderBox;

const styles = StyleSheet.create({    
    logo: {
      width: 353,
      height: 300,
    },
  
  });