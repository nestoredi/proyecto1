import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemDetailsContainer from './components/ItemDetailsContainer';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/Navbar';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/detalles/:id' element={<ItemDetailsContainer />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;