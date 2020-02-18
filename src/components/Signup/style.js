import {makeStyles} from "@material-ui/core/styles";
import bg from "../../assets/img/bg.png";

const Style = makeStyles(theme => ({
    margin: {
        marginTop: theme.spacing(10),

    },
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    img: {
        height: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    textField: {

        [`& fieldset`]: {
            // backgroundColor: '#F5F5F5',
            borderRadius: 47,
            borderColor: '#F5F5F5',

        },
    },
    circle: {
        margin: theme.spacing(0, 0, 0, 9),
        backgroundColor: '#00D57E',
    },
    submit: {
        backgroundColor: '#F5F5F5',
        borderRadius: 47,
        margin: theme.spacing(3, 0, 2),

    },
}));
export default Style;