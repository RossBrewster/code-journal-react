import { useState } from 'react';
import './App.css';
import { Create } from './Create';
import { Header } from './Header';

const newNoteObject = {
  title: '',
  url: '',
  note: '',
};

function App() {
  const [nextId, setNextID] = useState(0);

  return (
    <div>
      <Header />
      <Create data={newNoteObject} nextId={nextId} />
    </div>
  );
}

export default App;
