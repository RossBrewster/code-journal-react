import './App.css';
import './css/layout.css';
import './css/reset.css';
import './css/styles.css';
import { useState } from "react";
import { Form } from './Form';
import { Header } from './Header';
// import { NoteCard } from './NoteCard';
import { List } from './List';
import { data } from './data.ts';

const emptyValue = {
  title: '',
  url: '',
  note: '',
};

const testNote = {
  title: 'testtitle',
  url: 'https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg',
  note: 'testnote',
  id: 5,
};

const testArray = [
  {
  title: 'testtitle',
  url: 'https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg',
  note: 'testnote',
  id: 5,
},
{
  title: 'testtitle',
  url: 'https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg',
  note: 'testnote',
  id: 6,
},
{
  title: 'testtitle',
  url: 'https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg',
  note: 'testnote',
  id: 56,
}
]

function App() {
  const [editing, setEditing] = useState<number>(0)
  const [view, setView] = useState<'form' | 'list' | 'edit-form'>('form')


  data.editing = data.entries[editing];

  function handleSubmit() {
    setView('list')
  }

  function handleEditClick(value: number) {
    setEditing(value)
    console.log(data.entries)
    setView('edit-form')
  }
  return (
    <>
    <Header/>
    {view === 'form'&& <div><Form values={emptyValue} onClick={handleSubmit}/></div> }
    {view === 'list' && <div><List entries={data.entries} onEdit={handleEditClick}></List></div>}
    {view === 'edit-form' && <div><Form values={data.entries[editing -1 ]} onClick={handleSubmit}/></div>}
    </>
  )
}

export default App;
