import { Sidebar } from "../../../../components/layout/Sidebar";
import React, { useState } from 'react';

export function GetTweetsByProfileName() {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    interface Post {
        Name: string;
        UserTag: string;
        Timestamp: string; // Assuming it's a string representing the timestamp
        TweetContent: string;
        Reply: number;
        Retweet: number;
        Likes: number;
    }

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchInput(event.target.value);
    };
    const fetchData = async () => {
        if (searchInput.trim() === '') {
            alert('Please enter a search query.');
            return;
        }
        setLoading(true);
        setError(null);
        setData([]);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const raw = JSON.stringify({
            "Profile_name": searchInput
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("http://127.0.0.1:8000/twitter/api/v1/get-profile/", {
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
        console.log(requestOptions);
    }

    return (
        <>
            <Sidebar />
            <div className="main" >
            {loading && <div>Loading...</div>}
                <div className="dashborder-main">
                    <div className="dashborder-heading">
                        <h1>Get Twitter By Profile Name</h1>
                    </div>
                    <div className="twitter-sumbit-content">
                        <div className="teitter-full-body">
                            <div className="twitter-col-sumbit">
                                <input type="text" placeholder="search" value={searchInput} onChange={handleInputChange} />
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
                                <th>Name</th>
                                <th>User Tag</th>
                                <th>Timestamp</th>
                                <th>Tweet Content</th>
                                <th>Reply</th>
                                <th>Re-Tweet</th>
                                <th>Likes</th>
                            </tr>
                            {data.map((tweet, index) => (
                                <tr key={index}>
                                    <td>{tweet.Name}</td>
                                    <td>{tweet.UserTag}</td>
                                    <td>{new Date(tweet.Timestamp).toLocaleString()}</td>
                                    <td>{tweet.TweetContent}</td>
                                    <td>{tweet.Reply}</td>
                                    <td>{tweet.Retweet}</td>
                                    <td>{tweet.Likes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}