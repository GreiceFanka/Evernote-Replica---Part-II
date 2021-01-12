import React, { Fragment, useEffect, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Column, Button } from 'rbx';
import '../../styles/notes.scss';
import List from '../notes/list';
import NoteService from '../../services/note';

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  const createNote = async (params) => {
    const note = await NoteService.create();
    fetchNotes();
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    })
    setCurrentNote(note);
  }
  return (
    <Fragment>
      <Column.Group className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
              Search...
            </Column>
          </Column.Group>
          <List
            notes={notes}
            selectNote={selectNote}
            current_note={current_note}
            createNote={createNote} />
        </Menu>


        <Column size={12} className="notes-editor" id="notes-editor">
          Editor...
        </Column>
      </Column.Group>
    </Fragment>
  )
}
export default Notes;