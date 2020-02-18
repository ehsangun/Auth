import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Style from "./style";
import TrendingFlat from "@material-ui/icons/TrendingFlat";
import {Box} from "@material-ui/core";

export default function Signup() {
    const classes = Style();

    return (
        <div className={classes.img}>
        <Container className={'ops'} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.margin}></div>


                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                boxShadow={5}
                                bgcolor="background.paper"
                                style={{ borderRadius:47 }}
                            >
                                <TextField
                                    className={classes.textField}
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    placeholder="Username"
                                    autoFocus
                                />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box
                                boxShadow={5}
                                bgcolor="background.paper"
                                style={{ borderRadius:47 }}
                            >
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                required
                                fullWidth
                                id="organization"
                                placeholder="Organization"
                                name="organization"
                            />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                boxShadow={5}
                                bgcolor="background.paper"
                                style={{ borderRadius:47 }}
                            >
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                required
                                fullWidth
                                id="site"
                                placeholder="Site"
                                name="site"
                            />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box
                                boxShadow={5}
                                bgcolor="background.paper"
                                style={{ borderRadius:47 }}
                            >
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                placeholder="Phone"
                                name="phone"
                            />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box
                                boxShadow={5}
                                bgcolor="background.paper"
                                style={{ borderRadius:47 }}
                            >
                            <TextField
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="number"
                                className={classes.textField}
                                name="fleetsize"
                                variant="outlined"
                                required
                                fullWidth
                                id="fleetsize"
                                placeholder="Fleet size"
                            />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                boxShadow={5}
                                bgcolor="background.paper"
                                style={{ borderRadius:47 }}
                            >
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                placeholder="Address"
                                name="address"
                            />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container
                          direction="column"
                          justify="center"
                          alignItems="center">
                        <Grid item xs={12}>
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
                    </Grid>

                </form>
            </div>
        </Container>
        </div>
    );
}