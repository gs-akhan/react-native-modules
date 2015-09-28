/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Item = require('./components/TodoComponent');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  NativeModules

} = React;
var Todos = [];
NativeModules.MyCustomModule.show("Sandeep is here !!!!");
var HelloApp = React.createClass({
  getInitialState : ()=> {
    return {
      todos : Todos
    };
  },
  render: function() {
    var items  = this.state.todos.map((item, iter) => {
      return (<Item 
                name = {item}
                idx = {iter+1}
                key = {iter+1}
                deleteHandler = {this.onDeleteHandle}
              />)
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Keep Adding Todos.
          </Text>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 0.5}}
            ref = "TodoInput"
            autoCorrect = {false}
            autoFocus = {true}
            placeholder = "Enter items to plan"
            onSubmitEditing = {this.addTodo}
            onChangeText = {this.handleChange}
            value = {this.state.currentInput}
             />
          {items}
        </View>
        <View>
          {Todos.length === 0 ? (<View><Text style = {styles.noData}> You have nothing to do !!</Text></View>) : null}
         </View>
        
      </ScrollView>
    );
  },
  onDeleteHandle  : function(index) {
    Todos.splice(index,1);
    this.setState({
      todos : Todos
    });
  },
  handleChange : function(text) {
    this.setState({
      currentInput : text
    });
  },
  addTodo : function(event) {
    var todos = this.state.todos;
    todos.push(this.state.currentInput);
    this.setState({
      currentInput : ""
    })
    this.setState({todos});
  }
});

var styles = StyleSheet.create({
  noData : {
    fontSize : 25,
    fontWeight : "bold",
    flex: 1,
    alignItems: "center",
    textAlign : "center",
    justifyContent : "center"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('HelloApp', () => HelloApp);
