import {View,StyleSheet,Text} from "react-native"

export default Header=()=>{
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title} >First React Native Project</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    titleContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"},
        
    title:{fontSize:30, color:"white"}
})