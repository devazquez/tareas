import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from './useInputState.js';

const TareasForm = ({ saveTarea }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTarea(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Agrega Tarea"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <Button variant="outlined" color="primary"  type="submit"> Agregar </Button>
    </form>
  );
};

export default TareasForm;