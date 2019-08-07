import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';

export default class FacebookButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { InputNumber1 : 0, InputNumber2: 0, Output: 0 };
  }

onZero(){
  var temp = 0;
  this.setState({Output:temp});
}
onOne(){
  var temp =  "1";
  this.setState({Output:temp});
}

onTwo(){
  var temp =  "2";
  this.setState({Output:temp});
}

onThree(){
  var temp =  "3";
  this.setState({Output:temp});
}

onFour(){
  var temp =  "4";
  this.setState({Output:temp});
}

onFive(){
  var temp =  "5";
  this.setState({Output:temp});
}

onSix(){
  var temp =  "6";
  this.setState({Output:temp});
}

onSeven(){
  var temp =  "7";
  this.setState({Output:temp});
}

onEight(){
  var temp =  "8";
  this.setState({Output:temp});
}

onNine(){
  var temp =  "9";
  this.setState({Output:temp});
}

  render() {
    return (
    <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}> />
          <Text style={styles.ans} >
                  {this.state.Output}
              </Text>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#a5a5a5',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.black}>AC</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#a5a5a5',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.black}>+/-</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#a5a5a5',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.black}>%</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#ef9835',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.all}>÷</Text></TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
             <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onSeven()}><Text style={styles.all}>7</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onEight()}><Text style={styles.all}>8</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onNine()}><Text style={styles.all}>9</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#ef9835',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.all}>x</Text></TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onFour()}><Text style={styles.all}>4</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onFive()} ><Text style={styles.all}>5</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onSix()} ><Text style={styles.all}>6</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#ef9835',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.all}>-</Text></TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onOne()} ><Text style={styles.all}>1</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onTwo()} ><Text style={styles.all}>2</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onThree()}><Text style={styles.all}>3</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#ef9835',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.all}>+</Text></TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 2, backgroundColor: '#343434',margin:5,borderRadius: 50,height:80}} >
                <TouchableOpacity style={styles.btn2} onPress = {()=>this.onZero()} ><Text style={styles.zero}>0</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#343434',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.all}>.</Text></TouchableOpacity>
              </View>
               <View style={{flex: 1, backgroundColor: '#ef9835',margin:5,borderRadius: 100,height:80}} >
                <TouchableOpacity style={styles.btn2}><Text style={styles.all}>=</Text></TouchableOpacity>
              </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  zero:{
    textAlign:'left',
    padding: 25,
    fontSize: 30,
    color:"#ffffff"
  },
  all:{
    textAlign:'center',
    padding: 20,
    fontSize: 30,
    color:"#ffffff"
  },
  black:{
    textAlign:'center',
    padding: 21,
    fontSize: 20,
    color:"#000000"
  },
  ans:{
    textAlign:'right',
    padding: 20,
    fontSize: 60,
    color:"#ffffff"
  }
})
