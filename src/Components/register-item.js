import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',


    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,

    },
}));

export default function RegisterItem () {
    const classes = useStyles();

    return(
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-basic"
                    className={classes.textField}
                    label="Item Name"
                    margin="normal"
                    variant="outlined"
                />
            </div>
        </form>
        );
}