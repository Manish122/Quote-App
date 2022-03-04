import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        // background: '#111111'
        background: 'blue'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 70,
        textDecoration: 'none',
        fontSize: 20
    },
    lefty: {
        marginRight: 100
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                 <NavLink className={classes.tabs} to="./" exact>Quotes App</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All Quotes</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add Quotes</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;