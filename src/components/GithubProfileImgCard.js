import React from "react";

let GithubProfileImgCard = (props) => {

 return(
    <React.Fragment>
        {
            Object.keys(props.user).length > 0 ? 
            <React.Fragment>
                <div className="card">
                    <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                        <img src={props.user.avatar_url} className="img-fluid img-thumbnail"/>
                        {/* <a href="#!">
                        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                        </a> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.user.name}</h5>
                        <p className="card-text">{props.user.bio}</p>
                        <a href={props.user.html_url} target="_blank" className="btn btn-primary" data-mdb-ripple-init>Profile</a>
                    </div>
                </div>
            </React.Fragment>
            : null
        }
    </React.Fragment>
 )   
}
export default GithubProfileImgCard;