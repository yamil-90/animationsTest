import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, ScrollView, Pressable } from 'react-native'

const App = () => {

  const [animation1] = useState(new Animated.Value(0))
  const [animation2] = useState(new Animated.Value(0))
  const [animation3] = useState(new Animated.Value(14))
  const [animation4] = useState(new Animated.Value(0))
  const [animation5] = useState(new Animated.Value(1))
  const [animation6_1] = useState(new Animated.Value(0))
  const [animation6_2] = useState(new Animated.Value(0))


  useEffect(() => {
    Animated.loop(
      Animated.sequence(
        [
          Animated.parallel([
            Animated.timing(
              animation1, {
              //animation 1 will go from 0 to 1 in 500 ms
              toValue: 1,
              duration: 1500,
              useNativeDriver: false
            }),
            Animated.timing(
              animation2, {
              toValue: 1,
              duration: 1100,
              useNativeDriver: false
            }),
            Animated.timing(
              animation3, {
              toValue: 30,
              duration: 1100,
              useNativeDriver: false
            }),
            Animated.timing(
              animation4, {
              toValue: 360,
              duration: 1100,
              useNativeDriver: false,
              tension: 10
            }),
          ]),
          Animated.parallel([
            Animated.timing(
              animation1, {
              //animation 1 will go from 0 to 1 in 500 ms
              toValue: 0,
              duration: 1500,
              useNativeDriver: false
            }),
            Animated.timing(
              animation2, {
              toValue: 0,
              duration: 1100,
              useNativeDriver: false
            }),
            Animated.timing(
              animation3, {
              toValue: 14,
              duration: 1100,
              useNativeDriver: false
            }),
            Animated.timing(
              animation4, {
              toValue: 0,
              duration: 1100,
              useNativeDriver: false,
              tension: 10
            }),
          ])
        ])
    ).start()
  }, [])
  // useEffect for animation 6 
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation6_2, {
          toValue: 100,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation6_1, {
          toValue: 60,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation6_1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation6_2, {
          toValue: 200,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation6_1, {
          toValue: 60,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation6_1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation6_2, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }),
      ])
    ).start()
  }, [])
  // animation 6 styles
  const animation6Style = {
    transform: [
      { translateY: animation6_1 },
      { translateX: animation6_2 }
    ]
  }

  const animation4Interpolation = animation4.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })

  const animation4Style = {
    transform: [{ rotate: animation4Interpolation }]
  }

  // animation 5 functions

  const pressBtn = () => {
    Animated.spring(animation5, {
      toValue: 0.8,
      useNativeDriver: false
    }).start();
  }

  const releaseBtn = () => {
    Animated.spring(animation5, {
      toValue: 1,
      //friction == bounciness lower values mean more bouncy
      friction: 4,
      // tension is how fast it bounces higher values make it faster
      tension: 100,
      useNativeDriver: false
    }).start();
  }

  const animation5Style = {
    transform: [{ scale: animation5 }]
  }

  return (
    <ScrollView>
      <View>
        {/* animation 1 */}
        <Animated.View style={[
          styles.animation1,
          {
            opacity: animation1
          }]}>
          <Text style={styles.text}>Animation 1 {'\n'}
            <Text>fade in</Text>
          </Text>

        </Animated.View>
        {/* animation 2 */}
        <Animated.View style={[styles.animation2, {
          width: animation2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%']
          })
        }]}>
          <Text style={styles.text}>Animation 2 {'\n'}
            <Text style={styles.text}>Stretch with interpolate</Text>
          </Text>
        </Animated.View>
        {/* animation 3 */}
        <View style={styles.animation3}>
          <Animated.Text style={[styles.text, { fontSize: animation3 }]}>
            animation 3 {'\n'}
            <Text style={styles.text}>Size</Text>
          </Animated.Text>
        </View>

        {/* animation 4 */}

        <Animated.View style={[styles.animation4, animation4Style]}>
          <Text style={styles.text}>Animation 4 {'\n'}
            <Text style={styles.text}>Rotation with interpolate</Text>
          </Text>
        </Animated.View>

        {/* animation 6  */}
        <View>
          <Animated.View style={[styles.animation6Box, animation6Style]}>

          </Animated.View>
        </View>

        {/* animation 5 bouncy button  */}
        <Pressable
          onPressIn={() => pressBtn()}
          onPressOut={() => releaseBtn()}
        >
          <Animated.View style={[styles.animation5Btn, animation5Style]}>
            <Text style={styles.text}>Animation 5 {'\n'}
              <Text style={styles.text}>Scale in and out</Text></Text>
          </Animated.View>
        </Pressable>

      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  animation1: {
    height: 100,
    margin: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  animation2: {
    height: 100,
    width: 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornflowerblue'
  },
  animation3: {
    height: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  animation4: {
    justifyContent: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: 'red',
    height: 170,
    width: 170,
    padding: 3,
    marginBottom: 20
  },
  animation5Btn: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 280,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'cornflowerblue',
    marginBottom: 20
  },
  animation6Box: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    zIndex: 3,
    marginBottom: 20,
    borderColor: '#000',
    borderWidth: 1
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase'
  }
})
