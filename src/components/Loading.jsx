import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {TailSpin} from "react-loader-spinner";

const Loading = () => {
    return (
        
            <TailSpin
                type="ThreeDots"
                color="rgb(0, 153, 255)"
                height={10}
                width={10}
                timeout={3000}
            />
        
    )
}

export default Loading