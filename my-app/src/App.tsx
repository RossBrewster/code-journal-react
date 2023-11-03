import './App.css';
import { Form } from './Form';
import { Header } from './Header';
import { NoteCard } from './NoteCard';

const emptyValue = {
  title: 'ddd',
  url: '',
  note: 'ggg',
};

const testNote = {
  title: 'testtitle',
  url: 'https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg',
  note: 'testnote',
  id: 5,
};

function App() {
  return (
    <div>
      <Header />
      <NoteCard values={testNote} />
    </div>
  );
}

export default App;
