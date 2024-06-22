import { useState } from "react";
import Card from '../Cards/card';

function Grid(n)
{
    const [board,setBoard]=useState(Array(n).fill(""));
    return (<div className="grid">
        {board.map((el,idx) => <Card key={idx}/>)}
    </div>
    )

}
export default Grid;