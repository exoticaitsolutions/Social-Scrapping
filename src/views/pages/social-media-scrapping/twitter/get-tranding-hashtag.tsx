/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sidebar } from "../../../../components/layout/Sidebar";
import React, { useState } from 'react';

export function GetTrendingHashtag() {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    interface Post {
        id: string;
        category: string;
        type: string; // Assuming it's a string representing the timestamp
        trending: string;
        posts: number;
    }
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        setData([]);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("http://127.0.0.1:8000/twitter/api/v1/get-trending-hashtag/", {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((result) => {
                setData(result.data || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }

    return (
        <>
            <Sidebar />
            <div className="main" >
            {loading && <div>Loading...</div>}
                <div className="dashborder-main">
                    <div className="dashborder-heading">
                        <h1>Get Twitter Trendign Hashtags</h1>
                    </div>
                    <div className="twitter-sumbit-content">
                        <div className="teitter-full-body">

                            <div className="twiiter-send-btn">
                                <button onClick={fetchData} className="search-button">get the Trending Hashtag</button>
                            </div>
                        </div>
                        <div className="option-col-main">
                            <ul className="option-drop">
                                <li>Downloads <i className='bx bx-chevron-down'></i>
                                    <ul className="josn-drop">
                                        <li><a href="#">CSV File</a></li>
                                        <li><a href="#">Excel File</a></li>
                                        <li><a href="#">esthed</a></li>
                                        <li><a href="#">esthed</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                
                <div className="dashborder-table">
                    <table className="rwd-table">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Category</th>
                                <th>Type</th>
                                <th>Trending</th>
                                <th>Posts</th>

                            </tr>
                            {data.map((tweet, index) => (
                                <tr key={index}>
                                    <td>{tweet.id}</td>
                                    <td>{tweet.category}</td>
                                    <td>{tweet.type}</td>
                                    <td>{tweet.trending}</td>
                                    <td>{tweet.posts}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}