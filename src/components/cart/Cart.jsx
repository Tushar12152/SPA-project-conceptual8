import PropTypes from 'prop-types'

const Cart = ({actor,handdleSelect}) => {
    // console.log(actor)
    const {image,name,salary,role,}=actor
    return (
        <div>
             <div className='w-[250px] border-2 border-gray-50'>
                  <img  className='mx-auto my-5 w-[80px] rounded-full' src={image} alt="" />
                  <h1 className='text-white font-bold text-2xl text-center'>{name}</h1>
                  <h1 className= 'my-5 text-white font-semibold text-center'> Lorem ipsum dolor sit amet consectetur adipisicing.
                   </h1>
                  <div className='flex justify-around '>
                      <p className='text-white '>Salary:{salary}</p>
                      <p className='text-white '>{role}</p>

                  </div>
                  <button onClick={()=>handdleSelect(actor)} className='w-20 bg-slate-400 p-2 text-white mt-5 mb-2 ml-20 rounded-lg'>Select</button>
             </div>
        </div>
    );
};

Cart.propTypes={
    actor:PropTypes.object.isRequired,
    handdleSelect:PropTypes.func.isRequired,
}

export default Cart;