import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications, SettingsPower } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    tooBar: {
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: '#282c34'
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    logout: {
        marginLeft: theme.spacing(1),
        cursor: "pointer"
    }
}));

const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.tooBar}>
                    <Typography variant="h6" component="h2" className={classes.logoLg}>
                        <i className="fa fa-graduation-cap"></i> Gestion Mention LMD
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.logoSm}>
                        <i className="fa fa-graduation-cap"></i>
                    </Typography>
                    <div className={classes.icons}>
                        <Badge badgeContent={2} overlap="rectangular" color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Link to='/annonces'>
                            <Badge overlap="rectangular" badgeContent={"0"} style={{ color: "#fff" }} color="secondary" className={classes.badge}>
                                <Notifications />
                            </Badge>
                        </Link>
                        <Avatar style={{ backgroundColor: "#555" }} src="s" />
                        <SettingsPower className={classes.logout} />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;