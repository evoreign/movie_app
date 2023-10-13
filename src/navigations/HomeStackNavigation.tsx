import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

const Stack = createStackNavigator();

const HomeStackNavigation = (): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MovieDetails" component={MovieDetail} />
  </Stack.Navigator>
);