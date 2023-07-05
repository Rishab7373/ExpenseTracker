import './Card.css';
const Card = (props) => {
    const classes = 'card ' + props.className;
    //card.css + the class which is applied in the props

    return <div className={classes}>
        {props.children}
    </div>
}
export default Card;



