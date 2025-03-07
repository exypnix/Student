import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const BookList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>5 книжных новинок октября</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.bookContainer}>
          <Text style={styles.bookContainerText}>«Кадиш.com»Натан Ингландер</Text>
          <Text style={styles.bookContainerText}>Издательство «Книжники»</Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
            Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада»
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 80, // Фиксированная высота
    width: '100%',
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    
  },
  content: {
    flex: 1, // Занимает всё доступное пространство
    padding: 15,
  },
  bookContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    justifyContent: 'center',
  },
  bookContainerText: {
    width: '100%',
  fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  descriptionBox: {
    flex: 4,
    backgroundColor: 'gray',
  },
  descriptionText: {
    marginTop: 30,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default BookList;