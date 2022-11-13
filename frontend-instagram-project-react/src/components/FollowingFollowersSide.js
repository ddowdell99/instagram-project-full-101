import React, { Component } from 'react'

export default class FollowingFollowersSide extends Component {
    render() {
        return (
            <div className="card followersCard">
                <div className="card-header">
                    <div className="dropdown">
                        <button className="w-100 btn btn-secondary dropdown-toggle followersSwitch" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select...
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Following</button></li>
                            <li><button className="dropdown-item" type="button">Followers</button></li>
                        </ul>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {/* Should display whether follower or following is selected */}
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>
        )
    }
}
