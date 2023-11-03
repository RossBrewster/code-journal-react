import { BsPencilFill } from 'react-icons/bs';
import './NoteCard.css';

type NoteCardProps = {
  values: {
    title: string;
    url: string;
    note: string;
    id: number;
  };
};

export function NoteCard({ values }: NoteCardProps) {
  return (
    <div className="column-full" id={String(values.id)}>
      <div className="column-half">
        <img src={values.url} />
      </div>
      <div className="column-half">
        <div className="row title-row">
          <h2>{values.title}</h2>
          <BsPencilFill className="icon" />
        </div>
        <div>
          <p>{values.note}</p>
        </div>
      </div>
    </div>
  );
}
