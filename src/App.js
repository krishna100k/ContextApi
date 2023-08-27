import { useCart } from "./CartContext";
import "./styles.css";
const App = () => {
  const { cart, setCart } = useCart();

  return (
    <div>
      <center>
        <h1>Context Api</h1>
        <h1>My name is {cart}</h1>
        <button onClick={() => setCart("Krishna")}>Krishna</button>
        <button onClick={() => setCart("")}>Reset</button>
      </center>
    </div>
  );
};

export default App;
