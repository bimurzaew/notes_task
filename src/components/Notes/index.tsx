import React from "react";
import Box from "@mui/material/Paper";
import NoteItem from "./NoteItem";
import { Button } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { EnumInputKeys, Note } from "../../types/NoteTypes";
import { getCurrentDateTime } from "../../utils/DateUtils";

const Notes = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>(
    [
      {
        id: 1,
        title: "Do something",
        description: "somewhere",
        date: getCurrentDateTime(),
      },
    ],
    "notes"
  );

  const handleAddNote = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: `Заметка ${prev.length + 1}`,
        description: "",
        date: getCurrentDateTime(),
      },
    ]);
  };

  const handleRemoveItem = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const handleChange = (value: string, id: number, key: EnumInputKeys) => {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === id) {
          return { ...note, [key]: value };
        }
        return note;
      })
    );
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          boxShadow: 0,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 2,
            mt: 4,
          },
        }}
      >
        {notes?.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            handler={handleChange}
            handleRemove={handleRemoveItem}
          />
        ))}
      </Box>
      <Box component="div" sx={{ boxShadow: 0, textAlign: "center", mt: 4 }}>
        <Button onClick={handleAddNote} sx={{ color: "#616161" }}>
          <LibraryBooksIcon fontSize="large" />
        </Button>
      </Box>
    </>
  );
};

export default Notes;
