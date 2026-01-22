import type { IHeader } from "../Interfaces/IHeader";
import "../styles/components/Header.css"


function HeaderParts({title, description} : IHeader){
    return(
         <header className="parts-header">
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </header>
    )
}

export default HeaderParts;