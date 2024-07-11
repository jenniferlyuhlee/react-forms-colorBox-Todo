import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css"

function BoxList() {
    const INITIAL_STATE = []

    const [boxList, setBoxList] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxList(boxList => [...boxList, {...newBox, id: uuid()}])
    }

    const removeBox = (id) => {
        setBoxList(boxList.filter(b => b.id!== id));
    }

    return (
        <div>
            <h1>BoxList</h1>
            <NewBoxForm addBox={addBox} />
            <div className="Boxes">
                {boxList.map(({color, width, height, id}) => <Box
                                                         key = {id}
                                                         color={color}
                                                         width={width}
                                                         height={height}
                                                         removeBox = {() => removeBox(id)}/> )}
            </div>
        </div>
    )
}

export default BoxList;