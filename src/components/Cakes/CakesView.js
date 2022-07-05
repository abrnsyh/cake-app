import {useSelector, useDispatch} from 'react-redux';
import { decrementCake, restockCake } from './CakesSlice';

const CakesView = () => {
  const dispatch = useDispatch();

  const totalCakesRedux = useSelector((state) => state.cake.totalCakes)

  console.log('total', totalCakesRedux)

  return (
    <div>
      <h1>CakesVies</h1>
      <h1>Total Cakes: {totalCakesRedux}</h1>

      <button onClick={() => dispatch(decrementCake())}>Buy</button>
      <button onClick={() => dispatch(restockCake())}>Restock</button>
    </div>
  )
}

export default CakesView