import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const Login = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Log In Button Clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://images.pexels.com/photos/965875/pexels-photo-965875.jpeg?auto=compress&cs=tinysrgb&w=600' }} 
        resizeMode="cover" 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              accessibilityLabel="Email Input"
            />
            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
              autoCapitalize="none"
              accessibilityLabel="Password Input"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={[styles.buttonText, { fontSize: 16 }]}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigate('GetStarted')}>
            <Text style={styles.buttonText}>Back to Get Started</Text>
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
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#1E90FF',
  },
  forgotPasswordButton: {
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;




