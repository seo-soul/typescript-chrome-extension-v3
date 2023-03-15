import React, { FC } from 'react'
import { render } from 'react-dom'

interface IProps {
    
}
 
export const Popup: FC<IProps> = () => {
    return ( 
        <h1>
            Hello world React 123
        </h1>
     );
}
 
render(<Popup />, document.getElementById('popup'))