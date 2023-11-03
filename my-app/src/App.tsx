import { useState } from 'react'
import './App.css'
import { Create } from './Create'

const newNoteObject = {
  title: '',
  url: '',
  note: '',
}


function App() {
  const [nextId, setNextID] = useState(0)



  return (
    <Create data={newNoteObject} nextId={nextId}/>
  )
}

export default App
