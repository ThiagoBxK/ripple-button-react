import Button from "./components/Button";

function App() {
  return (
    <>
      <div style={{ display: "grid", gridGap: "20px" }}>
        <Button background="#22c55e" color="#fff">
          Continuar
        </Button>
        <Button background="#b91c1c" color="#efefef">
          Cancelar
        </Button>
      </div>
    </>
  );
}

export default App;
