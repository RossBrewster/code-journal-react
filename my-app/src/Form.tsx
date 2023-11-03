import placeholder from './images/placeholder-image-square.jpg';
import { useState } from 'react';
import './Create.css';
import { data } from './data.ts';

type Props = {
  values: {
    title: string;
    url: string;
    note: string;
    id?: number;
  };
};

type Sub = {
  title: string;
  url: string;
  note: string;
  id?: number;
};

export function Form({ values }: Props) {
  const [title, setTitle] = useState(values.title);
  const [url, setUrl] = useState(values.url);
  const [note, setNote] = useState(values.note);

  function handleSumbit(event) {
    event.preventDefault();
    console.log('data', data);
    const submission: Sub = {
      title: title,
      url: url,
      note: note,
    };

    if (values.id === undefined) {
      submission.id = data.nextEntryId;
    } else {
      submission.id = values.id;
    }

    if (submission.id === data.nextEntryId) {
      data.entries.push(submission);
    }

    data.nextEntryId++;
  }

  return (
    <div className="wrapper">
      <form id="entry-form">
        <div className="row">
          <div className="half-column">
            <img className="image" src={url ? url : placeholder} />
          </div>
          <div className="half-column">
            <label>
              Title
              <input
                required
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </label>
            <label>
              Photo URL
              <input
                required
                name="URL"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.currentTarget.value)}
              />
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
              value={note}
              onChange={(e) => setNote(e.currentTarget.value)}
            />
          </label>
        </div>
        <div className="button-wrapper">
          <button
            onClick={(event) => {
              handleSumbit(event);
            }}
            className="submit"
            type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
