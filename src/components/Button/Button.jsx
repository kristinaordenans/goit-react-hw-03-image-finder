// import { LoadmoreBnt } from "./Button.styled"
// import PropTypes from "prop-types"
import css from './Button.module.css'


export const LoadMore = ({ handleClick }) => {
    return (
        <button type="button" onClick={handleClick} className={css.button}>Load more</button>
    )
}



// _______________________



// import PropTypes from "prop-types"


// export const Button = ({handleClick}) => {
//     return (<button type='button' className={css.button} onClick={handleClick}>Load more</button>)
// }

