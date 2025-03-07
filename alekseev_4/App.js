import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  View, 
  Image, 
  Button, 
  Alert,
  Dimensions 
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

 const images = [
  {
    uri: 'https://www.aceinfoway.com/blog/wp-content/uploads/2020/04/Why-should-you-choose-React-Native-for-your-next-Mobile-Development-Project.jpg',
    text: 'React Native (также известный как RN) - это популярная платформа мобильных приложений на основе JavaScript, которая позволяет создавать мобильные приложения с собственным интерфейсом для iOS и Android. Фреймворк позволяет создавать приложения для различных платформ, используя одну и ту же кодовую базу.',
  },
  {
    uri: 'https://www.brainvire.com/blog/wp-content/uploads/2024/02/benefits-of-opting-for-react-native-in-app-development.jpg',
    text: 'Многие  продукты были созданы с использованием React Native, включая Skype, Facebook, Pinterest и UberEats. React Native - отличный вариант, если ваш бюджет ограничен и где не нужна супер-производительность. Для большинства кейсов его возможностей более чем достаточно.',
  }
];

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / SCREEN_WIDTH);
    setCurrentIndex(newIndex);
  };

  const handleUnderstand = () => {
    Alert.alert('Понятно', 'Вы успешно просмотрели все картинки!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((img, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: img.uri }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.imageText}>
        {images[currentIndex]?.text || ''}
      </Text>
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.dot, 
              index === currentIndex && styles.activeDot
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Мне всё понятно" 
          onPress={handleUnderstand} 
          color="blue"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  imageWrapper: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    resizeMode: 'cover',
    marginTop: 150,
  },
  imageText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 15,

    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'lightblue',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  buttonContainer: {
    margin: 20,
  },
});

export default App;