
function App() {
  const a=20;
  

  return (
     <>
    <h1 className="heading">React rocks</h1>
    <p>{10+10}% for js</p>
    <p>{a}</p>
    <p>{a>50 ? "greater":"lesser"}</p>
    </>
  )
}

export default App
