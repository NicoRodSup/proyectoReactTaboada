import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element ={<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element ={<ItemListContainer/>} />
          <Route path ="/item/:idItem" element ={<ItemDetailContainer/>}/>
        </Routes>

      </BrowserRouter>
      <ItemCount initial={1} stock={10} onAdd={(contador) => console.log(`cantidad agregada`, contador)} />
    </>
  )
}

export default App