import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import TrendingFlat from '@material-ui/icons/TrendingFlat';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Box} from "@material-ui/core";


import signinStyle from "./style";
import {Link} from "react-router-dom";


export default function Signin() {
    const classes = signinStyle();

    return (
        <div className={classes.img}>
            <Container component="main" fixed maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <div className={classes.margin}></div>
                    <Typography component="h1" variant="h5">
                        User login
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <Box
                                    boxShadow={5}
                                    bgcolor="background.paper"
                                    style={{borderRadius: 47}}
                                >
                                    <TextField className={classes.textField}
                                               placeholder="Username"
                                               variant="outlined"
                                               margin="normal"
                                               required
                                               fullWidth
                                               id="email"
                                               name="email"
                                               autoComplete="email"
                                               autoFocus
                                    >
                                    </TextField>

                                </Box>

                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box
                                    boxShadow={5}
                                    bgcolor="background.paper"
                                    style={{borderRadius: 47}}
                                >
                                    <TextField className={classes.textField}
                                               placeholder="Password"
                                               variant="outlined"
                                               margin="normal"
                                               required
                                               fullWidth
                                               name="password"
                                               type="password"
                                               id="password"
                                               autoComplete="current-password"
                                    />
                                </Box>
                            </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-start"
                        >
                            <Grid >
                                <Link className={classes.forget} to={'/'} >Forget password</Link>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid container
                              direction="row"
                              justify="flex-end"
                              alignItems="center">
                            <Grid item xs={10} className={classes.sub}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Enter
                                    <Avatar className={classes.circle}>
                                        <TrendingFlat/>
                                    </Avatar>
                                </Button>
                            </Grid>
                            <Box
                                boxShadow={5}
                                style={{borderRadius: 100}}
                            >
                                <Grid item xs={2}>

                                    <IconButton className={classes.signup} href="/signup">
                                        <PersonAddIcon/>
                                    </IconButton>
                                </Grid>
                            </Box>

                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}