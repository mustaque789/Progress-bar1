import React from 'react'

const ProgressBar = ({progress,color}) => {

    const styleObjectVariable = {
        width: `${progress}%`,
        backgroundColor: color || 'lightgreen',
        height: 30,
        borderRadius: 20
    }

  return (
    //while progressing, digit with % and color width should be increased. so put those two values in
    // states and pass as props
    <>
     <div className="container">
            <div className="progress-bar">
               <div style={styleObjectVariable}>
                  {`${progress}%`}
               </div>
            </div>
      </div>
    </>
  )
}

export default ProgressBar
