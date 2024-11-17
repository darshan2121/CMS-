import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const logoScale = new Animated.Value(0);
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    // Start animation
    Animated.sequence([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to the next screen after the animation
      setTimeout(() => navigation.replace('SignUpScreen'), 1000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: logoScale }],
            opacity: logoOpacity,
          },
        ]}
      >
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>BuildPro</Text>
        </View>
      </Animated.View>
      <Text style={styles.footerText}>Building your dreams, together.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#52b865',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  logoText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
  },
});

export default SplashScreen;
