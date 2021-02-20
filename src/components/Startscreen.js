import React from 'react';

function Startscreen ({ handleDataSet }) {

    return (
        <div className="startscreen">
            <button className="startscreen__btn" onClick={()=>{ handleDataSet('small') } }>Load small users base</button>
            <button className="startscreen__btn" onClick={()=> { handleDataSet('big') } }>Load big users base</button>
        </div>
    )
}

export default Startscreen;