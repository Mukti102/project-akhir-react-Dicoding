import NoteItem from "./NoteItem";
function NoteLists({ notes, onDelete, onArsip }) {
  return (
    <div
      className="w-full flex flex-wrap
    "
    >
      {notes.length == 0 ? (
        <h1>Tidak ada catatan</h1>
      ) : (
        <div className="flex w-full flex-wrap">
          {notes.map((note, index) => {
            if (!note.archived) {
              return (
                <NoteItem
                  key={index}
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

export default NoteLists;
