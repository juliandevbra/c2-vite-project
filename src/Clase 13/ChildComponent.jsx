import Button from "../Components/Button";
import { useRecipeStates } from "../Context/Context";

const ChildComponent = () => {
  const { salario, setSalario } = useRecipeStates();
  console.log("Se renderizó componente hijo");
  return (
    <div className="child">
      <h3>ChildComponent</h3>
      <p>Cuanto ganas por semestre?</p>
      <h3>Total: {salario * 6} </h3>
      <Button handleClick={() => setSalario(salario + 300000)}>
        Aumente mi salario
      </Button>
    </div>
  );
};

export default ChildComponent;
