import * as React from 'react'

const LoadingCards: React.FC = () => {

    const renderSkeleton = () =>{
        let cards:JSX.Element[] = []

        for (let index = 0; index < 7; index++) {
             cards.push(<div  className="loading-card">
                <p className="date"></p>
                <p className="icon"></p>
                <h2 className="temperature"></h2>
                <p className="description"></p>
                <p className="day"></p>
             </div >)
        }   
        return cards
    }

    return (
        <>
            {renderSkeleton()}
        </>  
    )
}

export default LoadingCards