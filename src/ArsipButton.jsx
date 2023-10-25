function ArsipButton({ archived, id, onArsip }) {
  return (
    <button
      className="w-1/2 border-2 border-slate-600 p-2 rounded-md  hover:bg-slate-600 hover:text-slate-"
      onClick={() => onArsip(id)}
    >
      {archived ? "Lepaskan" : "Arsipkan"}
    </button>
  );
}

export default ArsipButton;
