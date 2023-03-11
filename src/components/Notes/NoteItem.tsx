import React, { FC } from "react";
import ReactQuill from "react-quill";
import {
  Box,
  IconButton,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EnumInputKeys, Note } from "../../types/NoteTypes";
import "react-quill/dist/quill.snow.css";
import { modules } from "../../EditorModules";

interface NoteItemProps {
  note: Note;
  handler: (value: string, id: number, key: EnumInputKeys) => void;
  handleRemove: (id: number) => void;
}

const MyTextField = styled(TextField)({
  "*.css-2y464i-MuiInputBase-root-MuiFilledInput-root": {
    backgroundColor: "#616161",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    color: "white",
    "&:hover": {
      backgroundColor: "#616161",
    },
    "&:focus-within": {
      backgroundColor: "#616161",
    },
  },
  input: {
    padding: 15,
  },
});

const NoteItem: FC<NoteItemProps> = ({ note, handler, handleRemove }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        textAlign: "center",
        backgroundColor: "#c6ff00",
        borderRadius: 4,
        width: 514,
        height: "100%",
      }}
    >
      <MyTextField
        value={note.title}
        fullWidth
        onChange={(e) =>
          handler(e.target.value, note.id, EnumInputKeys["title"])
        }
        variant="filled"
      />
      <ReactQuill
        modules={modules}
        theme="snow"
        value={note.description}
        onChange={(value) =>
          handler(value, note.id, EnumInputKeys["description"])
        }
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Typography variant="body1">{note.date}</Typography>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => handleRemove(note.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default NoteItem;
