import "./Body.css"


export function Body() {
    return (
        <div className="conteiner2">
            <h1  className="fucts">Fun Fucts About React</h1>
            <ul className="ul_tag">
                <li className="li" > <span class="custom-bullet"></span>Was first released in 2013</li>
                <li className="li" >Was originally created by Jordan Walke</li>
                <li className="li" >Has well over 100K stars on GitHub</li>
                <li className="li" >Is maintained by Facebook</li>
                <li className="li" >Powers thousands of enterprise apps,<br></br> including mobile apps</li>
            </ul>
            <img className="react_img" src="./reactjs-icon 2.png" alt="React Logo"/>
        </div>
    )
}