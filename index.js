/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TodoList from '../ToDoReactApp/Source/Components/TodoList';
import SearchInput from '../ToDoReactApp/Source/Components/SearchInput';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TodoList);
