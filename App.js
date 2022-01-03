import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const App = () => {

  const [animation1] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(
      animation1, {
      //animation 1 will go from 0 to 1 in 500 ms
      toValue: 1,
      duration: 500
    }
    ).start()
  }, [])

  return (
    <View>
      <Animated.View style={{
        opacity: animation1
      }}>
        <Text>fade in</Text>
      </Animated.View>
      <Text></Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
