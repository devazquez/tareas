import React from 'react';
import Typography from '@material-ui/core/Typography';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import TareaForm from './TareaForm';
import TareaList from './TareaList';
import useTareaState from './useTareaState';

const Main = () => {
    const { tareas, addTarea, deleteTarea } = useTareaState([]);

    return (
        <div className="App">
          <Typography component="h1" variant="h2">
            Tareas
          </Typography>
    
          <TareaForm
            saveTarea={tareaText => {
              const trimmedText = tareaText.trim();
    
              if (trimmedText.length > 0) {
                addTarea(trimmedText);
              }
            }}
          />
          <TareaList tareas={tareas} deleteTarea={deleteTarea} />
        </div>
    );
};
export default Main;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();