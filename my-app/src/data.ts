/* exported data */

type Data = {
  view: string;
  entries: {
    title: string;
    url: string;
    note: string;
    id: number
  }[];
  editing: {
    title: string;
    url: string;
    note: string;
    id: number;
  } | null;
  nextEntryId: number;
};

export let data: Data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function () {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
});

const localData = localStorage.getItem('code-journal-data');
if (localData) {
  data = JSON.parse(localData);
}
