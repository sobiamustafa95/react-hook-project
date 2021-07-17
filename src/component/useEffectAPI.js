import React, { useEffect, useState } from 'react';

const useEffectAPI = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url).then(resp => resp.json())
        .then(resp => setUsers(resp))
    },[])
    return(
        // <div>
        //     {
        //         posts.map(post => <div><p> {`${post.id} ${post.title}`} </p></div>)
        //     }
        // </div>
        <div className="App-header">
            <h2 align = "center"> Users Data  </h2>
            <div className = "container-fluid mt-5">
                <div className = "row text-center">
                {
                    users.map((curElem) =>{
                        return(
                            <div className = "col-10 col-md-4 mt-5" key = {curElem.id}>
                                <div className = "card p-2">
                                    <div className = "d-flex align-items-center">
                                        <div className = "image"> <img src = { curElem.thimbnailsUrl } alt = "img" class = "rounded" width ="155" /> </div>
                                            <div className = "ml-3 w-100">
                                                <h4 className = "mb-0 mt-0 textLeft"> {curElem.id} </h4> <span className = "textLeft"> { curElem.title } </span>
                                                <div className = "p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className = "d-flex flex-column"> <span class = "articles"> Articles </span> <span class ="number1">38</span> </div>
                                                    <div className = "d-flex flex-column"> <span class = "followers"> Followers </span> <span class ="number1">980</span> </div>
                                                    <div className = "d-flex flex-column"> <span class = "rating"> Rating </span> <span class ="number1">8.9</span> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                
                    }
                    
                </div>
            </div>
        </div>
    );
};



export default useEffectAPI;