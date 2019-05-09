import React from 'react';
import * as R from 'ramda';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField, Checkbox, Paper } from '@material-ui/core';
import {SpeakerNotes} from '@material-ui/icons';


export function TodoList({ todos, dispatch }) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        My Awesome Todo App
            </Typography>
                </Toolbar>
            </AppBar>
            <div className="container">
                <p>Welcome to my awesome todo app 🙌</p>
                <Paper className="todolist" elevation={1}>
                    <List>
                        {R.values(todos).map(t => {
                            const todoDisplay = t.completed ?
                                <s>{t.name}</s> :
                                <TextField onChange={(ev) => dispatch({ type: "changeName", id: t.id, newName: ev.target.value })} value={t.name}></TextField>;
                            return <ListItem>
                                <ListItemIcon><SpeakerNotes></SpeakerNotes></ListItemIcon>
                                <ListItemText>{todoDisplay}</ListItemText>
                                <ListItemSecondaryAction>
                                    <Checkbox checked={t.completed} onChange={(_) => dispatch({ type: "toggle", id: t.id })} />
                                </ListItemSecondaryAction>
                            </ListItem>
                        })}
                    </List>
                </Paper>
                <Button variant="contained" color="primary" onClick={(_) => dispatch({ type: "add" })}>Add a Todo</Button>
            </div>
        </div>
    );
}