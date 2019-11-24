import React from 'react'

const Iframe : React.FC = ({children}) => {

    // @ts-ignore
    console.log(window.MyfanAuth)

    return (
        <div>
            {children}
        </div>
    )
}

export default Iframe

