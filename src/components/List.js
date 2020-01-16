import React from 'react';


function List ({items}) {
        return (
        <ul>
           {
               items.map(item => (
                   <li key={item.id}>
                       <span>
                           {item.name}
                       </span>
                       <button>
                           x
                       </button>
                   </li>
               ))
           }
        </ul>
        )
}

export default List;