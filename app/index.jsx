import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-pbold'>Hello!</Text>
      <StatusBar style='auto' />
      <Link href="/home" className='font-pregular' style={{ color: 'blue' }} >Go to Home</Link>
    </View>
  );
}
