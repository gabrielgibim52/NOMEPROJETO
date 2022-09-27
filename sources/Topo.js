import { View, Text, Image} from "react-native";
import GOKU from "../sources/img/goku.png";



export default function Topo({}){
  return(
    <View>
     <Text>METRELADORA DE BENÇÃOS DO GOKUUUU</Text>
     <Image
            source={GOKU}
            style={{height:50, width:50}}
     />
    </View>
  )
}