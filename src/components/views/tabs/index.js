import { Navigation } from 'react-native-navigation';

const LoadTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'sellitApp.Home',
        label: 'Home',
        title: 'Home'
      },
      {
        screen: 'sellitApp.AddPost',
        label: 'Sell It',
        title: 'Sell It'
      }
    ]
  })
}

export default LoadTabs;
