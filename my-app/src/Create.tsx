type Props = {
  data: {
    title: string;
    url: string;
    note: string;
    id?: number ;
  },
  nextId: number
}



export function Create({data, nextId}:Props) {
  return (
    <form>
      <label >
        <input name='title' type='text' value={data.title}/>
      </label>
      <label>
        <input name='URL' type='url' value={data.url}/>
      </label>
      <label>
        <input name='note'  type='text' value={data.note}/>
      </label>
        <button type='submit'>Save</button>
    </form>
  )
}
