import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header.tsx';


function App() {
  return (
    <div>
     <BrowserRouter>
			<Header />
		</BrowserRouter>
    </div>
  );
}

export default App;
