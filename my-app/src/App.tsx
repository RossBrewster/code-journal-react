
import './App.css';
import { Form } from './Form';
import { Header } from './Header';

const emptyValue = {
  title: 'ddd',
  url: '',
  note: 'ggg',
};

function App() {


  return (
    <div>
      <Header />
      <Form values={emptyValue} />
    </div>
  );
}

export default App;
