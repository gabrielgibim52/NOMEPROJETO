import { View } from "react-native";
import Detalhes from "./sources/Detalhes";
import Topo from "./sources/Topo";

export default function App(){
  return(
    <View>
      <Topo/>
      <Detalhes/>
    </View>
  )
}