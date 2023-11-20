import { useSelector,useDispatch } from "react-redux/es/exports";
import Counter from "../components/Counter";
import { increase,decrease,setDiff } from "../modules/counter";

function CounterContainer(){

    const number=useSelector(state=>state.counter.number)
    const diff=useSelector(state=>state.counter.diff)
    

    const dispatch = useDispatch()
    const onIncrease=()=>dispatch(increase())
    const onDecrease=()=>dispatch(decrease())
    const onSetDiff=(diff)=>dispatch(setDiff(diff))

    return(
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer