var React = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  item : {
    paddingLeft : 20,
    paddingRight : 20,
    marginBottom : 5,
    borderColor : "#ddd",
  }
});
var Item = React.createClass({
  render : function() {
    return (
      <View style={styles.item}>
      <Text 
        onPress = {this.deleteHandler} >
        {this.props.idx} . {this.props.name}
      </Text>
      </View>);
  },
  deleteHandler : function() {
    debugger;
    this.props.deleteHandler(this.props.idx-1);
  }
});








module.exports = Item;