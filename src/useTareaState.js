import { useState } from 'react';

export default initialValue => {
  const [tareas, setTareas] = useState(initialValue);

  return {
    tareas,
    addTarea: tareaText => {
      setTareas([...tareas, tareaText]);
    },
    deleteTarea: tareaIndex => {
      const newTareas = tareas.filter((_, index) => index !== tareaIndex);

      setTareas(newTareas);
    }
  };
};