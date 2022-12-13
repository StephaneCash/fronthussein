import { Container, makeStyles, Typography } from "@material-ui/core";
import {
    Dashboard, People, Announcement
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import "../css/Leftbar.css"

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
        backgroundColor: "#fff",
        height: "100vh",
        color: '#333',
        position: "fixed",
        width: "16.5%",
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(1.5),
            fontSize: "18px",
            cursor: 'pointer',
        },
    },
    text: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        marginTop: "auto",
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    }
}));

const Leftbar = () => {

    const classes = useStyles();

    return (
        <div className="leftbar">
            <Container className={classes.container} id="conatiner">
                <div className={classes.item}>
                    <NavLink to="/dashboard" className="d-flex">
                        <Dashboard className={classes.icon} id="icon" />
                        <Typography className={classes.text} >
                            Dashboard
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/promotions" className="d-flex">
                        <People className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Promotions
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/manip" className="d-flex">
                        <Announcement className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Manipulations
                        </Typography>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
}

export default Leftbar;