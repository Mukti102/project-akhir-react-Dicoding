import NoteItem from "./NoteItem";
import NoteDeleteButton from "./NoteDeleteButton";
// import NoteArsipButton from "./NoteArsipButton";
export default function NoteListItem({ title, content, id, onDelete }) {
  <div>
    <NoteItem title={title} content={content} />
    <div className="flex">
      <NoteDeleteButton id={id} onDelete={onDelete} />
      {/* <NoteArsipButton id={id} /> */}
    </div>
  </div>;
}
