import React, { Component, useState } from "react";
import {
  StyleSheet
} from "react-native";
import {Container,Header,Content,Footer,Text,Button, View} from 'native-base';

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
     <Container>
       <Header style={styles.header}>
         <Text>
            test
         </Text>
       </Header>
       <Content>
         <Text>
            deme
         </Text>
         <Text>
          dinero
         </Text>
         <Button></Button>
       </Content>
       <Footer>
         
       </Footer>
     </Container>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    backgroundColor:"white"
  },
  content:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"skyblue",
    alignItems:"center",
    justifyContent:"center"
  },
  contentText:{
    color:"white"
  },
  header:{
    backgroundColor:"powderblue",
    paddingTop:15
  },
  footer:{
    flexDirection:"row",
    backgroundColor:"steelblue",
    alignItems:"center"

  }
});
