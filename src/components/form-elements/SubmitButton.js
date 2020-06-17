import React from 'react';

const SubmitButton = ({title, styling, loading, buttonHasBeenClicked }) => {
    return(
        <button
            onClick={()=> buttonHasBeenClicked()}
            className={styling}
            disabled={!!loading}
            >
            {title}
        </button>
    )
}

export default SubmitButton;