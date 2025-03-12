function Buscador({ busqueda, setBusqueda }) {
  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button>Buscar</button>
    </div>
  );
}

export default Buscador;
