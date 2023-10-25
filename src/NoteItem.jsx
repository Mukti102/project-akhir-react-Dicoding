import NoteDelete from "./NoteDeleteButton";
import ArsipButton from "./ArsipButton";
import { showFormattedDate } from ".";
function NoteItem({ createdAt, id, title, Archived, body, onDelete, onArsip }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-64 border-2 border-slate-200 h-max  text-white mt-2 px-2 rounded-sm bg-slate-800 py-2 
    "
      >
        <h1 className="font-semibold text-[30px] break-words leading-9">
          {title}
        </h1>
        <p className="text-sm font-thin text-slate-400">
          {showFormattedDate(createdAt)}
        </p>
        <h2 className="text-sm font-extralight w-60 leading-4 mt-4 break-words">
          {body}
        </h2>
      </div>
      <div className="flex">
        <NoteDelete onDelete={onDelete} id={id} />
        <ArsipButton onArsip={onArsip} id={id} isArchieve={Archived} />
      </div>
    </div>
  );
}

export default NoteItem;
