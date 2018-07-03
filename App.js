import { Navigation } from 'react-native-navigation';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';
import ConfigureStore from './src/components/Store/config';
import { Provider } from 'react-redux';

const store = ConfigureStore()

Navigation.registerComponent('sellitApp.Login',
() =>
Login,
store,
Provider
)
Navigation.registerComponent('sellitApp.Home',
() =>
Home,
store,
Provider
)
Navigation.registerComponent('sellitApp.AddPost',
() =>
AddPost,
store,
Provider
)



export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sellitApp.Login',
    title: 'login',
    navigatorStyle: {
      navBarHidden: true
    }
  }
})
