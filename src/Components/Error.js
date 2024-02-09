import {useRouteError} from "react-router-dom";





const Error = () => {
    const errorPage = useRouteError();
    console.log(errorPage);
    
    return(
        <div>
            <h1>{errorPage.status}</h1>
            <h2>{errorPage.data}</h2>
            <h3>{errorPage.statusText}</h3>

        </div>
    )
}


export default Error;