import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postCard}>
        <Image
          source={{ uri: 'https://brightmagazine.ru/wp-content/uploads/2025/03/possessed-photography-zbLW0FG8XU8-unsplash-600x400.jpg' }}
          style={styles.postImage}
        />

        <Text style={styles.postTitle}>
          Как общаться с искусственным интеллектом?
        </Text>

        <Text style={styles.postContent}>
          Коммуникация — это настоящее искусство. Хоть с людьми, хоть с искусственным интеллектом. 
          Раз уж этот самый ИИ стал частью нашей повседневной жизни, пора учиться с ним правильно общаться. 
          Поэтому мы решили собрать советы экспертов на эту тему.
        </Text>

        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.buttonText}>Читать далее</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  postCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    padding: 16,
    paddingBottom: 8,
  },
  postContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  readMoreButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    margin: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default App;