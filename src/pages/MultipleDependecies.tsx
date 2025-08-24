import React, { useState, useEffect} from "react";

const MultipleDependedncies: React.FC = () => {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);


    useEffect(() => {
        console.log(`Width or Height changed:, ${width}x${height}`);
    }, [width, height]); // This effect runs only when 'width' or 'height' changes
    return (
        <div>
            <button onClick={() => setWidth(width + 10)}>Increase width</button>
            <br /> <br />
             <button onClick={() => setHeight(height + 10)}>Increase height</button>
        </div>
    )
}

export default MultipleDependedncies;