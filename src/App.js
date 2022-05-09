import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

export default function App() {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>React Redux Revision</h1>
      {/* <h2>Steps for redux implementations</h2>
      <h4>UI</h4>
      <h4>Action Creator</h4>
      <h4>Action</h4>
      <h4>Dispatch</h4>
      <h4>useReducer</h4>
      <h4>Store</h4> */}
      <h2>{account}</h2>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
    </div>
  );
}
