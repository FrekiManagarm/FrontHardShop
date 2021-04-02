import React from 'react'

const Error = ({ error }) => {
    return (
        <div style={{ fontFamily: "Nunito", fontWeight: 600, color: "red"}}>
            {error}
        </div>
    )
}

export default Error
