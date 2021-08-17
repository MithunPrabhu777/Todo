import React,{useEffect, useState} from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){

    const [lists,setLists] = useState([]);
    
    const items = props.items;

    useEffect(() => {
        setLists(getLocalItems());
        console.log(items);
    },[]);

    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(items))
        console.log(items);
    },[items]);

    const getLocalItems = () => {
        const list = localStorage.getItem('lists')
        console.log(list);
        if(list){
            return JSON.parse(localStorage.getItem('lists'))
        }
        else{
            return [];
        }
    }
    console.log(localStorage);
    
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;