import { BsPencilFill } from 'react-icons/bs';
import './NoteCard.css';

type NoteCardProps = {
  values: {
    title: string;
    url: string;
    note: string;
    id: number;
  };
  onEdit: (value: number) => void;
};

export function NoteCard({ values, onEdit }: NoteCardProps) {
  return (
    <div className="row" id={String(values.id)}>
      <div className="column-half">
        <img src={values.url} className='form-image'/>
      </div>
      <div className="column-half">
        <div className="row title-row">
          <h2>{values.title}</h2>
          <BsPencilFill className="icon" onClick={() => onEdit(values.id)}/>
        </div>
        <div>
          <p>{values.note}</p>
        </div>
      </div>
    </div>
  );
}
