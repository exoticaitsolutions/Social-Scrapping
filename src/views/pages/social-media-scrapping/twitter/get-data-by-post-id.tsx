import { Sidebar } from "../../../../components/layout/Sidebar";
import React, { useState } from 'react';

export function GetTweetsByPostIds() {
    const [profile_name, setUser] = useState("");
    const [profile_ids, setIDS] = useState("");
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    interface Post {
        username: string;
        views_count: string;
        TweetContent: string;
        timestamp: string; // Assuming it's a string representing the timestamp
        content_image: string;
        reply_count: string;
        like_count: string;
        repost_count: string;
        bookmark_count: string;
    }
 
    const fetchData = async () => {
        if (profile_ids.trim() === '') {
            alert('Please enter a post id.');
            return;
        }
        if (profile_name.trim() === '') {
            alert('Please enter a Twitter username.');
            return;
        }
        setLoading(true);
        setError(null);
        setData([]);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "user_name": profile_name,
            "post_ids": [
                profile_ids
            ]
        });
          fetch("http://127.0.0.1:8000/twitter/api/v1/get-tweets-by-id/", {
            method: "POST",
            headers: myHeaders,
            body: raw,
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
                        <h1>Get Twitter By Post IDS</h1>
                    </div>
                    <div className="twitter-sumbit-content">
                        <div className="teitter-full-body">
                            <div className="twitter-col-sumbit">
                                <input type="text" placeholder="Enter Twitter Username"  onChange={(e) => setUser(e.target.value)} />
                            </div>
                            <div className="twitter-col-sumbit">
                                <input type="text" placeholder="Enter post id"  onChange={(e) => setIDS(e.target.value)} />
                            </div>
                            <div className="twiiter-send-btn">
                                <button onClick={fetchData} className="search-button">Submit</button>
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
                                <th>Username</th>
                                <th>Tweet Content</th>
                                <th>Views Count</th>
                                <th>Timestamp</th>
                                <th>Tweet Image</th>
                                <th>Like Count</th>
                                <th>Repost Count</th>
                                <th>Bookmark Count</th>
                            </tr>
                            {data.map((tweet, index) => (
                                <tr key={index}>
                                    <td>{tweet.username}</td>
                                    <td>{tweet.TweetContent}</td>
                                    <td>{tweet.views_count}</td>
                                    <td>{new Date(tweet.timestamp).toLocaleString()}</td>
                                    <td>{tweet.content_image}</td>
                                    <td>{tweet.reply_count}</td>
                                    <td>{tweet.like_count}</td>
                                    <td>{tweet.repost_count}</td>
                                    <td>{tweet.bookmark_count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}