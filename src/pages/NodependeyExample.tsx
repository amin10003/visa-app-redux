
import React, { useEffect, useState } from "react";

const NoDependencyExample: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect runs every render");
    })

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-50 to-green-100 px-4 text-center border-b-2 border-green-200 m-auto">
            <h2 className="bg-black text-2xl text-white p-4 mx-6 rounded">Count : {count}</h2>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-2xl hover:bg-blue-800 px-2 py-4 border-solid  mx-3 my-4 rounded">Click Me</button>
        </div>
    )
}

export default NoDependencyExample;