import { Container } from 'semantic-ui-react';
import Header from './components/layouts/header';
import ListContainer from './containers/list-container';
import FormContainer from './containers/form-container';


function App() {
	return (
		<Container className='App'>

			<Header />

			<ListContainer />

			<FormContainer textAlign='justified' />

		</Container>

	);
}

export default App;
