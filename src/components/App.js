import WeatherContainer from './WeatherContainer.tsx'
import { ChakraProvider } from '@chakra-ui/react';
 
function App() {
  return (
		<ChakraProvider>
			<div className='App'>
				<WeatherContainer />
			</div>
		</ChakraProvider>
	);
}

export default App;
