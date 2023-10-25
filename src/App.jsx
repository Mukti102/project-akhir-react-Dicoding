import React from "react";
import NoteInput from "./NoteInput";
import NoteLists from "./NoteLists";
import NoteArsipList from "./NoteArsipList";
import { getInitialData, showFormattedDate } from ".";
export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      notesArship: [],
      showedNotes: getInitialData(),
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArsip = this.onArsip.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    const inputValue = e.target.value;
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    this.setState(() => {
      return {
        showedNotes: filteredNotes,
        notesArship: filteredNotes,
      };
    });
  }
  onAddNote({ title, body }) {
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createAt: new Date(),
            archived: false,
          },
        ],
        showedNotes: [
          ...prev.showedNotes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
    alert(`${title} berhasil di tambahkan`);
  }
  onDelete(id) {
    const notesItem = this.state.showedNotes.filter((item) => item.id !== id);
    this.setState(() => {
      return {
        showedNotes: notesItem,
        notesArship: notesItem,
      };
    });
  }
  onArsip(id) {
    const notesItem = this.state.showedNotes;
    notesItem.map((item) => {
      if (item.id == id) {
        item.archived = !item.archived;
      }
    });
    const notesArsip = notesItem.filter((item) => item.archived === true);
    this.setState(() => {
      return {
        notesArship: notesArsip,
      };
    });
    console.log(this.state.showedNotes);
  }
  render() {
    return (
      <>
        <div className="w-full flex flex-col ">
          <div className="flex w-full justify-between mb-6 border-b-2 border-slate-600 p-3 items-center">
            <h1 className="text-4xl font-bold">Note</h1>
            <input
              type="text"
              className="border-2 border-slate-500 px-2 text-sm rounded-sm h-7 w-52"
              onChange={this.onSearch}
              placeholder="Cari Catatan..."
            />
          </div>
          <div className="w-full flex flex-col justify-center px-6 py-2">
            <div className="w-max">
              <h1 className="font-bold text-3xl">Buat Catatan</h1>
              <NoteInput addNote={this.onAddNote} />
            </div>
            <h1 className="font-bold text-3xl">Catatan aktif</h1>
            <NoteLists
              notes={this.state.showedNotes}
              onDelete={this.onDelete}
              onArsip={this.onArsip}
            />
            <h1 className="font-bold text-3xl">Arsip</h1>
            <NoteArsipList
              notes={this.state.notesArship}
              onDelete={this.onDelete}
              onArsip={this.onArsip}
            />
          </div>
        </div>
      </>
    );
  }
}
