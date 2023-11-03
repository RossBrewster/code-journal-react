import placeholder from './images/placeholder-image-square.jpg';
import './Create.css';

type Props = {
  data: {
    title: string;
    url: string;
    note: string;
    id?: number;
  };
  nextId: number;
};

export function Create({ data, nextId }: Props) {
  return (
    <div className="wrapper">
      <form id="entry-form">
        <div className="row">
          <div className="half-column">
            <img className="image" src={placeholder} />
          </div>
          <div className="half-column">
            <label>
              Title
              <input required name="title" type="text" value={data.title} />
            </label>
            <label>
              Photo URL
              <input required name="URL" type="url" value={data.url} />
            </label>
          </div>
        </div>
        <div className="full-column">
          <label>
            Notes
            <textarea
              cols={30}
              rows={10}
              required
              name="note"
              value={data.note}
            />
          </label>
        </div>
        <div className="button-wrapper">
          <button className="submit" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
