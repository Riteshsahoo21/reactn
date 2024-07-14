import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

const SignUp = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    
    setError('');

    console.log("Sign Up Button Clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=600' }} 
        resizeMode="cover" 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Create Account</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigate('GetStarted')}>
            <Text style={styles.buttonText}>Back to Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

SignUp.propTypes = {
  navigate: PropTypes.func.isRequired,
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
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
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
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUp;


