import React, {useState} from 'react';
import {SubjectItems} from './Subjects';
import {DropdownItem, DropdownLink,DropdownMenu} from './DropdownElements'


function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <DropdownMenu
        onClick = {handleClick}
        >
        {SubjectItems.map((item,index) => {
            return(

        <DropdownItem key ={index}>
        <DropdownLink to = '/'
        onClick = {()=> setClick(false)}>

        {item.title}
        
        </DropdownLink>
        </DropdownItem>

            )
        })}
        
        
        </DropdownMenu>

            
        </>
    )
}

export default Dropdown
