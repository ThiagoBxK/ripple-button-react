import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div style={{ display: "grid", gridGap: "20px" }}>
        <Button
          style={{
            background: "#4f46e5",
            textColor: "#efefef",
          }}
        >
          Continuar
        </Button>

        <Button
          style={{
            background: "#dc2626",
            textColor: "#efefef",
          }}
        >
          Cancelar
        </Button>
      </div>
    </>
  );
}

export default App;
