import React from 'react';
import { Text, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';

var count = 0;
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '0',
      oper: '',
      save: 0,
    };
  }

  clearNum(ac) {
    if (ac == 'AC') {
      count = 0;
      this.setState({ output: '0' });
      this.setState({ output: '0' });
      this.setState({ oper: '' });
      this.setState({ save: 0 });
    }
  }

  showNum(num) {
    if (this.state.output == '0'&& num != '.') {
      this.setState({ output: num });
    } else if (num == '.' && count == 0) {
      count = 1;
      this.setState({ output: this.state.output + num });
    } else if (num != '.') {
      this.setState({ output: this.state.output + num });
    }
  }

  sum() {
    var ans = 0;
    switch (this.state.oper) {
      case 'x':
        ans = this.state.save * this.state.output;
        this.setState({ output: ans });
        break;
      case '÷':
        ans = this.state.save / this.state.output;
        this.setState({ output: ans });
        break;
      case '+':
        var integer = Number(this.state.output);
        var integer2 = Number(this.state.save);
        ans = integer2+integer;

        this.setState({ output: ans });
        break;
      case '-':
        ans = this.state.save - this.state.output;
        this.setState({ output: ans });
        break;
      default:
        break;
    }
  }

  sign(x) {
    switch (x) {
      case 'x':
        this.setState({ oper: 'x' });
        this.setState({ save: this.state.output });
        this.setState({ output: '' });
        count = 0;
        break;
      case '÷':
        this.setState({ oper: '÷' });
        this.setState({ save: this.state.output });
        this.setState({ output: '' });
        count = 0;
        break;
      case '+':
        this.setState({ oper: '+' });
        this.setState({ save: this.state.output });
        this.setState({ output: '' });
        count = 0;
        break;
      case '-':
        this.setState({ oper: '-' });
        this.setState({ save: this.state.output });
        this.setState({ output: '' });
        count = 0;
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>{''}</Text>
          <Text>{''}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.ans}>{' ' + this.state.output}</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#a5a5a5',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.clearNum('AC')}>
                  <Text style={styles.black}>AC</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#a5a5a5',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity style={styles.btn2}>
                  <Text style={styles.black}>+/-</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#a5a5a5',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity style={styles.btn2}>
                  <Text style={styles.black}>%</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ef9835',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.sign('÷')}>
                  <Text style={styles.all}>÷</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('7')}>
                  <Text style={styles.all}>7</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('8')}>
                  <Text style={styles.all}>8</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('9')}>
                  <Text style={styles.all}>9</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ef9835',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.sign('x')}>
                  <Text style={styles.all}>x</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('4')}>
                  <Text style={styles.all}>4</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('5')}>
                  <Text style={styles.all}>5</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('6')}>
                  <Text style={styles.all}>6</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ef9835',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.sign('-')}>
                  <Text style={styles.all}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('1')}>
                  <Text style={styles.all}>1</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('2')}>
                  <Text style={styles.all}>2</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('3')}>
                  <Text style={styles.all}>3</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ef9835',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.sign('+')}>
                  <Text style={styles.all}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 2,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 50,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('0')}>
                  <Text style={styles.zero}>0</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#343434',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.showNum('.')}>
                  <Text style={styles.all}>.</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ef9835',
                  margin: 5,
                  borderRadius: 100,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.sum()}>
                  <Text style={styles.all}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  zero: {
    textAlign: 'left',
    padding: 25,
    fontSize: 30,
    color: '#ffffff',
  },
  all: {
    textAlign: 'center',
    padding: 20,
    fontSize: 30,
    color: '#ffffff',
  },
  black: {
    textAlign: 'center',
    padding: 26,
    fontSize: 20,
    color: '#000000',
  },
  ans: {
    textAlign: 'right',
    padding: 20,
    fontSize: 60,
    color: '#ffffff',
  },
});
