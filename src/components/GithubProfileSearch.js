import React, { useState } from "react";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubProfileRepos from "./GithubRepos";
import GithubProfileImgCard from "./GithubProfileImgCard";
import Axios from 'axios';
import { clientId, clientSecretKey } from "../Credentials";

let GithubProfileSearch = () => {
let [name, setName] = useState();
let [user, setUser] = useState({});
let [repos, setRepos] = useState([]);
let [errorMessage, setErrorMessage] = useState();

let searchProfile = (e) => {
    e.preventDefault();
    searchProfileData(name);
    searchProfileRepos(name);
    
}

let searchProfileData = (name) => {
    let dataUrl = `https://api.github.com/users/${name}?client_id=${clientId}&client-secret=${clientSecretKey}`;
    Axios.get(dataUrl).then((response)=>{
        setUser(response.data);
        setErrorMessage("");
    })
    .catch((error)=>{
        setUser({});
        setErrorMessage(error.message);
    })
}

let searchProfileRepos = (name) => {
    let dataUrl = `https://api.github.com/users/${name}/repos?client_id=${clientId}&client-secret=${clientSecretKey}`;
    Axios.get(dataUrl).then((response)=>{
        setRepos(response.data);
        setErrorMessage("");
    })
    .catch((error)=>{
        setRepos([]);
        setErrorMessage(error.message);
    })
}

 return(
    <React.Fragment>
                <div className="container rounded">
                    <div className="row mt-3 pt-1 bg-dark">
                        <div className="col-6">
                            <h1 className="text-white">Github Profile Search</h1>
                        </div>
                        <div className="col-6">
                            <form onSubmit={searchProfile}>
                                <div className="input-group">
                                    <input type="search" onChange={(e)=> {setName(e.target.value)}} className="form-control rounded mt-2" size="50" required placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    <input type="submit" className="btn btn-success btn-md border-white font-weight-bold" data-mdb-ripple-init value="Search"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <h3 className="text-center d-flex justify-content-center m-auto mt-5">{errorMessage}</h3>
        {
            Object.keys(user).length>0 ? 
            <React.Fragment>
                
                {/* <pre>{errorMessage}</pre>
                <pre>{user}</pre> */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3">
                            <GithubProfileImgCard user={user}/>
                        </div>
                        <div className="col-9">
                            <GithubProfileDetails user={user}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <GithubProfileRepos repos={repos}/>
                        </div>
                    </div>
                </div>
            </React.Fragment> : null
        }
        
    </React.Fragment>
 )   
}
export default GithubProfileSearch;