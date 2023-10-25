import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: "",
        body: "",
      },
      Karakter: "",
    };
  }

  onTitleChange(e) {
    const carakter = e.target.value.length;
    console.log(carakter);
    if (carakter > 50) {
      alert("carakter tidak boleh lebih 50");
      return;
    } else {
      this.setState(() => {
        return {
          Karakter: 50 - carakter,
          note: {
            ...this.state.note,
            title: e.target.value,
          },
        };
      });
    }
  }
  onContentChange(e) {
    this.setState(() => {
      return {
        note: {
          ...this.state.note,
          body: e.target.value,
        },
      };
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.state.note.title == "" && !this.state.note.body == "") {
      this.props.addNote(this.state.note);
    } else {
      alert("Judul Atau Catatan tidak boleh Kosong");
    }
  }
  render() {
    return (
      <form className="flex flex-col mt-3" onSubmit={this.onSubmit.bind(this)}>
        <p>Sisa Karakter : {this.state.Karakter} </p>
        <input
          value={this.state.note.title}
          type="text"
          className="border-2 border-slate-600  px-2 py-1 rounded-md"
          onChange={this.onTitleChange.bind(this)}
        />
        <textarea
          value={this.state.note.body}
          name=""
          cols="40"
          rows="10"
          className="border-2 border-slate-600 p-2 rounded-md mt-2"
          onChange={this.onContentChange.bind(this)}
        ></textarea>
        <button className="border-2 border-slate-600 p-2 rounded-md mt-1 hover:bg-slate-600 hover:text-slate-200">
          Tambahkan
        </button>
      </form>
    );
  }
}

export default NoteInput;
