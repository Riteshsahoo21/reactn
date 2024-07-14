import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GetStarted = ({ navigate }) => {
  const handleSignUp = () => {
    navigate('SignUp');
  };

  const handleLogin = () => {
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://img.freepik.com/free-vector/futuristic-background-with-lines_23-2148487905.jpg' }} 
        resizeMode="cover" 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Get started by creating an account or logging in.</Text>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default GetStarted;
