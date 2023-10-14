import { Link } from 'react-router-dom';
import { Item } from '../ItemInterface';
import React, { useState } from 'react';
import axios  from 'axios';
import { useAppDispatch, useAppSeletor } from '../app/hook';
//import { fetchPosts, addItem } from '../features/counter/postSlice';
import { fetchItems } from '../features/counter/itemSlice';

interface ItemProps {
    item :Item[]
    setItem :React.Dispatch<React.SetStateAction<Item[]>>
}

function Home() {

  let items = useAppSeletor((state) => state.item)
  let [axiosPageNum, setAxiosPageNum] = useState<number>(2);

  let itemState = useAppSeletor(state => state.item);
  console.log(itemState)
  //let fetchState = useAppSeletor(state => state.fetch);
  //console.log(fetchState)
  //let postValue = useAppSeletor(state => state.fetch.value)
  //let postStatus = useAppSeletor(state => state.fetch.status)


  const dispatch = useAppDispatch();

  const getData = async () => {
    try {
      const res = await axios.get(`https://codingapple1.github.io/shop/data${axiosPageNum}.json`);
      setAxiosPageNum(axiosPageNum + 1)
      console.log(res);
    } catch {
      console.log('err')
    }
    
  }

    return(
        <div className='body'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQIZ7PpZnCpcl0fASXEme1YpngLXF8quc8A&usqp=CAU' alt='' />

        <div className='showItem'>
          {itemState.map((item, i) => {
            return(
              <Link to={`/item/${i}`} className='item' key={i}>
                <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt='' />
                <div>{item.title}</div>
                <div>{item.content}</div>
                <div>{item.price}</div>
              </Link>
            )
          })}
        </div>
        {axiosPageNum > 3 ? null : 
        <button className='moreBtn' onClick={() => {
          dispatch(fetchItems(axiosPageNum));
          setAxiosPageNum(axiosPageNum + 1);
          console.log(itemState)
          /* axios.get(`https://codingapple1.github.io/shop/data${axiosPageNum}.json`)
          .then((res :any) => {
            setItems([...items, ...res.data])
            console.log(res);
            setAxiosPageNum(axiosPageNum + 1);
          })
          .catch((res :any) => {
            console.log(res);
          }) */
        }}>더보기</button>
        }
        

      </div>
    )
}

export default Home;