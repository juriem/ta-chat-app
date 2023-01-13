import React, {useState} from "react";

export const ErrorAlert = ({message}) => {
    const [show, setShow] = useState(true)

    setTimeout(() => setShow(false), 5000)

    if (show) {
        return (
            <div className="alert alert-danger" role="alert">{message}</div>
        )
    }

    return null
}


