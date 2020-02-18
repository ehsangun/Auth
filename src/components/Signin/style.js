import {makeStyles} from "@material-ui/core/styles";
import bg from '../../assets/img/bg.png';

const signinStyle = makeStyles(theme => ({
    // TODO font
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    margin: {
        marginTop: '20vh',

    },
    circle: {
        margin: theme.spacing(0, 0, 0, 9),
        backgroundColor: '#00D57E',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
    submit: {
        backgroundColor: '#F5F5F5',
        borderRadius: 47,
        margin: theme.spacing(3, 0, 3),

    },
    sub: {
        margin: theme.spacing(0, 2, 0, 0)
    },
    textField: {
        margin: theme.spacing(0),
        [`& fieldset`]: {
            // backgroundColor: '#F5F5F5',
            borderRadius: 47,
            borderColor: '#F5F5F5',
        },

    },
    img: {
        height: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    signup: {
        color: '#373737',
        backgroundColor: '#f5f5f5',


    },
    box: {
        borderRadius: 47, maxHeight: '7vh',
        marginBottom: theme.spacing(2)
    },
    forget: {
        marginRight: theme.spacing(3),
        color: '#0093FF',
        textDecoration: 'none'
    }

}));
export default signinStyle;