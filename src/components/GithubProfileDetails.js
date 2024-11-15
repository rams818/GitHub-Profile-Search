import React from "react";

let GithubProfileDetails = (props) => {
    const isoDate = props.user.created_at;
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                timeZoneName: 'short',
                            });

 return(
    <React.Fragment>
        {
            Object.keys(props.user).length > 0 ? 
            <React.Fragment>
                <div className="card">
                    <div  className="card-body">
                        <span className="badge badge-primary mr-3">{props.user.followers} Followers</span>
                        <span className="badge badge-warning mr-3">{props.user.public_repos} Repos</span>
                        <span className="badge badge-success mr-3">{props.user.public_gists} Gists</span>
                        <span className="badge badge-danger mr-3">{props.user.following} Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Name : <span className="font-weight-bold">{props.user.name}</span></li>
                            <li className="list-group-item">Location : {props.user.location}</li>
                            <li className="list-group-item">Email : {props.user.email}</li>
                            <li className="list-group-item">Company : {props.user.company}</li>
                            <li className="list-group-item">Blog : <a href={props.user.blog}>Blog</a></li>
                            <li className="list-group-item">Twitter : {props.user.twitter_username}</li>
                            <li className="list-group-item">Member Since : {formattedDate}</li>
                            <li className="list-group-item">Profile URL : <a href={props.user.html_url}>{props.user.html_url}</a></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
            : null
        }
    </React.Fragment>
 )   
}
export default GithubProfileDetails;