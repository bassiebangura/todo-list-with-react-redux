import React from 'react';


function List ({items, toggle, remove}) {
        return (
        <ul>
           {
               items.map(item => (
                   <li key={item.id}>
                       <span
                            onClick={() => toggle && toggle(item.id)}
                            style={{textDecoration: item.complete ?  'line-through': 'none'}}
                        >
                           {item.name}
                       </span>
                       <button onClick={() => remove(item.id)}>
                           x
                       </button>
                   </li>
               ))
           }
        </ul>
        )
}

export default List;