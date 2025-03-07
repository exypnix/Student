import * as React from 'react';
import { 
  NavigationContainer,
  DefaultTheme 
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  Button, 
  Text, 
  View, 
  StyleSheet, 
  FlatList, 
  Image, 
  ScrollView,
  TextInput,
  Switch 
} from 'react-native';

const Stack = createNativeStackNavigator();

const contacts = [
  { id: '1', name: 'Алексеев Константин', phone: '+375 29 123-28-50' },
  { id: '2', name: 'Миновский Андрей', phone: '+375 44 225-17-84' },
  { id: '3', name: 'Виноградов Артем', phone: '+375 33 668-21-14' },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Книга контактов</Text>
      
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
          </View>
        )}
      />

      <View style={styles.buttonGroup}>
       
        <View style={styles.buttonWrapper}>
          <Button
            title="Добавить контакт"
            onPress={() => navigation.navigate('AddContact')}
            color="blue"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Настройки"
            onPress={() => navigation.navigate('Settings')}
            color="blue"
          />
        </View>
      </View>
    </View>
  );
}

function SettingsScreen() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <ScrollView contentContainerStyle={styles.settingsContainer}>
      <View style={styles.settingItem}>
        <Text>Темная тема</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={setIsDarkTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text>Уведомления</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor={ {false: "#767577", true: "#81b0ff"  }}
        />
      </View>
    </ScrollView>
  );
}

function AddContactScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Сохранить"
          onPress={() => navigation.goBack()}
          color="blue"
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Главная' }}
        />
         <Stack.Screen 
          name="AddContact" 
          component={AddContactScreen} 
          options={{ title: 'Новый контакт' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Настройки' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  contactItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  contactName: {
    fontSize: 18,
    fontWeight: '500',
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
  },
  buttonGroup: {
    marginTop: 20,
  },
  buttonWrapper: {
    marginVertical: 8,
  },
  settingsContainer: {
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});