import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LiveMatches from './LiveMatches';
import UpcomingMatches from './UpcomingMatches';
import RecentMatches from './RecentMatches';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Live" component={LiveMatches} />
        <Tab.Screen name="Upcoming" component={UpcomingMatches} />
        <Tab.Screen name="Recent" component={RecentMatches} />
    </Tab.Navigator>
  );
}
export default MyTabs;