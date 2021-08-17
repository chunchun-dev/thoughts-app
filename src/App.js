import WithSubnavigation from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from './utils/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import PostThoughtForm from './components/PostThoughtForm';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <WithSubnavigation/>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/login'>
              <AuthPage/>
            </Route>
            <Route path='/post'>
              <PostThoughtForm/>
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App;
