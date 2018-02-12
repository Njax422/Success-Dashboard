import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 'calc(50% - 40px)',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export const ToDoList = () => (
    <Paper style={style} zDepth={5} rounded={false}>
    	<h2>ToDoList</h2>
  	</Paper>
);
