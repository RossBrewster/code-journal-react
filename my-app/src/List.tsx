
import { NoteCard } from "./NoteCard"

type Props = {
  entries: {
    title: string;
    url: string;
    id: number;
    note: string;
  }[];
  onEdit: (value: number) => void;
}

export function List({entries, onEdit}: Props) {
  console.log("entries", entries)
  const entryItems = entries.map(entry => {
    return  <NoteCard key={entry.id} values={entry} onEdit={onEdit}/>
  })

  return (
    <div>{entryItems}</div>
  )
}
