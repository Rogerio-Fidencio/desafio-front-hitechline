import './App.css';
import { useState } from 'react';

interface Drink {
  name: string;
  brand: string;
}

function App() {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [drinkList, setDrinkList] = useState<Drink[]>([{name: '', brand: ''}]);

  const handleAdd = (name: string, brand: string) => {

    if (name === '') {
      setOpenModal(false);
      return
    }

    const newDrink: Drink = {
      name: name,
      brand: brand
    }

    setDrinkList([...drinkList, newDrink]);
    setOpenModal(false);
  }

  const AddModal: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [brand, setBrand] = useState<string>('Brasil');
    

    return (
        <div className="fundo">
            <div className="modal">
                <h2>Adicione uma bebida</h2>

                <span>Nome</span>
                <input className="input-name" 
                  type="text"
                  placeholder="Bebida"
                  onChange={(e) => setName(e.target.value)}
                  value={name}>
                </input>

                <span>Marca</span>
                <select className="input-select" 
                name="select"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                >
                    <option value="brasil" selected>Brasil</option>
                    <option value="frança">França</option>
                    <option value="japão">Japão</option>
                    <option value="venezuela">venezuela</option>
                </select>

                <button onClick={() => handleAdd(name, brand)}>Adicionar</button>
            </div>
        </div>
    )
  }

  return (
    <div className="body">

      {openModal && <AddModal />}

      <div className="app">

        <button className="add-button" onClick={() => setOpenModal(openModal ? false : true)}>Adicionar Bebida</button>

        <div className="list-header">
          <span>Nome</span>
          <span>Marcar</span>
        </div>

        <div className="drink-list">
          {drinkList.map(drink => {
              return (
                <div className="list-line">
                  <span className="name">{drink.name}</span>
                  <span className="brand">{drink.brand}</span>
                </div>
              )
            })}
        </div>

      </div>
    </div>
  );
}

export default App;
