import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import ItemPage from './component/ItemPage'
import Home from './component/Home';
import { Item } from './ItemInterface'
import { useAppDispatch, useAppSeletor } from './app/hook';
import { increment } from './features/counter/counterSlice';
import { addItem } from './features/counter/itemSlice';

function App() {

  const count = useAppSeletor((state) => state.counter.value);
  //const itemList = useAppSeletor((state) => state.item);
  
  const dispatch = useAppDispatch();

  //console.log(itemList)

  function increFun() {
    dispatch(increment());
  }

  let [id, setId] = useState<number>();
  let [title, setTitle] = useState<string>('');
  let [price, setPrice] = useState<number>();


  /* let [items, setItems] = useState<Item[]>([
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
  ]); */
  

  return (
    <div className="App">
      {/* <button onClick={() => increFun()}>+</button>
      <span>{count}</span>
      <br/>
      <input name='id' value={id} onChange={e => {setId(Number(e.target.value))}} />
      <br/>
      <input name='title' value={title} onChange={e => setTitle(e.target.value)} />
      <br/>
      <input name='price' value={price} onChange={e => setPrice(Number(e.target.value))} />
 */}
    
      <div className='header'>
        <div><Link to='/'>Shopping APP</Link></div>
        <div>인기상품</div>
        <div>이벤트</div>
        <div>장바구니</div>
      </div>
        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
