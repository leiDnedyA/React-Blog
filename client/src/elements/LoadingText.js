import { useEffect, useState } from "react"

/**
 * Fun animated loading text React element
 */
export default ()=>{
    
    const [dots, setDots] = useState(1);
    const dotDelay = 300;
    const [minDots, maxDots] = [1, 15]

    let interval = null;

    useEffect(()=>{
        interval = setInterval(()=>{
            switch (dots) {
                case maxDots:
                    setDots(minDots);
                    break;
                default:
                    setDots(dots + 1);
                    break;
            };
        }, dotDelay);

        return function cleanup(){
            clearInterval(interval);
        }

    })

    
    return <p className="loadingText">loading{'.'.repeat(dots)}</p>
}