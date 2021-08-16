import WithSubnavigation from './components/Navbar';
import ThoughtFeed from './components/ThoughtFeed';
import { ChakraProvider } from "@chakra-ui/react"
import Thought from './components/Thought';

function App() {
  return (
    <ChakraProvider>
      <WithSubnavigation/>
      <ThoughtFeed/>
    </ChakraProvider>
  )
}

export default App;
