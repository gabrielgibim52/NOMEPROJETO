import { View, Text, Image} from "react-native";
import JASPION from "../sources/img/jaspion.png";


export default function Detalhes(){
  return(
    <View> 
     <Text>EITA PORRA, OLHA O JASPION (SI GURA!!!!!)</Text>
     <Image
            source={JASPION}
            style={{height:50, width:50}}
     />
    </View>
  )
}