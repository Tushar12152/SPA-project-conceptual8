import  PropTypes from "prop-types";
const Card = ({card}) => {
    // console.log(card)
    const {name}=card
    console.log(name)
    return (
       <div className="sticky top-2">
         <div className="sticky top-2">
             <h1 className= " sticky top-2 bg-gray-400 mt-1 p-2 rounded-lg text-center w-[50%] mx-auto ">{name}</h1>
        </div>
       </div>
    );
};
Card.propTypes={
    card: PropTypes.object.isRequired
}

export default Card;