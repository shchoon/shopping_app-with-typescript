import { Item } from '../ItemInterface';
import { useParams } from 'react-router-dom';
import '../App.css';
import { useAppSeletor } from '../app/hook';


interface ItemProps {
    item :Item[]
}

function Detail() {

    let items = useAppSeletor((state) => state.item);

    let size :number[]= [220, 230, 240, 250, 260, 270, 280, 290, 300];

    let itemId :number= Number(useParams().id);
    console.log(itemId) 

    let item = items[itemId];

    console.log(item)

    return(
        <div className='detail_page'>
            <img src={`https://codingapple1.github.io/shop/shoes${itemId+1}.jpg`} alt='' />
            <div className='explain'>
                <div>title : {item.title}</div>
                <div>content : {item.content}</div>
                <div>price : {item.price}</div>
                <div className='size_list'>
                    {size.map((size, i) => {
                        return(
                            <div className='size' key={i}>
                                {size}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Detail;