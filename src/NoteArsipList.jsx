import NoteItem from "./NoteItem";
function NoteArsipList({ notes, onDelete, onArsip }) {
  return (
    <div
      className="w-full flex flex-wrap
    "
    >
      {notes.length == 0 ? (
        <h1>Tidak ada catatan</h1>
      ) : (
        <div className="flex flex-wrap w-full ">
          {notes.map((note) => {
            if (note.archived) {
              console.log(note);
              return (
                <NoteItem
                  key={note.id}
                  id={note.id}
                  {...note}
                  onDelete={onDelete}
                  onArsip={onArsip}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default NoteArsipList;
