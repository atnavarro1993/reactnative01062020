import React, { Component } from "react";
import { Text, StyleSheet, TextInput } from "react-native";
import { Container, Header, Content, Footer, Button } from "native-base";
import { Link } from "react-router-native";

export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      disableButton: true,
    };
  }
  render() {
    const { history } = this.props;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text>HEADER</Text>
        </Header>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.contentText}>HolApp</Text>
          <Text style={styles.contentText}>ingrese su nombre: </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) =>
              this.setState({ name: text, disableButton: false })
            }
            value={this.state.text}
          />
          <Button
            style={styles.button}
            disabled={this.state.disableButton}
            onPress={() => {
              history.push({
                pathname: "/about",
                state: { name: this.state.name },
              });
            }}
          >
            <Text>saludar</Text>
          </Button>
          
        </Content>
        <Footer style={styles.footer}>
          <Text style={styles.footerText}>la mejor app?)</Text>
        </Footer>
      </Container>
    );
  }
}

export { Home };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    color: "gray",
    fontSize: 40,
  },
  header: {
    backgroundColor: "powderblue",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "steelblue",
    alignItems: "center",
    bottom:25
  },
  footerText: {
    color: "#EEEEEE",
    fontSize:30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    marginTop: 30,
  },
  textinput: {
    height: 40,
    width: 200,
    borderColor: "#AAAAAA",
    borderWidth: 2,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
