import { type FC, type PropsWithChildren, useState } from "react";
import { List } from "@refinedev/antd";
import { Form, Grid, Input, Space } from "antd";
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export const GetTweetsByProfileName: FC<PropsWithChildren> = ({ children }) => {
    interface Post {
        Name: string;
        UserTag: string;
        Timestamp: string; // Assuming it's a string representing the timestamp
        TweetContent: string;
        Reply: number;
        Retweet: number;
        Likes: number;
    }
    const screens = Grid.useBreakpoint();
    const [title, setTitle] = useState("");
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = () => {
        setLoading(true);
        setError(null);
        setData([]);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("http://127.0.0.1:8000/twitter/api/v1/get-profile/", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                Profile_name: title,
            }),
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


    // Render your component when data is loaded and there's no error
    return (
        <div className="page-container">
            <List
                breadcrumb={false}
                headerButtons={() => {
                    return (
                        <Space
                            style={{
                                marginTop: screens.xs ? "1.6rem" : undefined,
                            }}
                        >
                            <Form layout="inline">
                                <Form.Item name="name" noStyle>
                                    <Input
                                        size="large"
                                        placeholder="Search by name" onChange={(e) => setTitle(e.target.value)} />
                                    <button onClick={fetchData}>Click</button>
                                </Form.Item>
                            </Form>
                        </Space>
                    );
                }}
                contentProps={{
                    style: {
                        marginTop: "28px",
                    },
                }}
            >
                <div style={{ position: 'relative' }}>
                    {loading && <div className="loader-container"><p>Please Wait</p></div>}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Name</b></TableCell>
                                    <TableCell align="right"><b>UserTag</b></TableCell>
                                    <TableCell align="right"><b>Timestamp</b></TableCell>
                                    <TableCell align="right"><b>TweetContent</b></TableCell>
                                    <TableCell align="right"><b>Reply</b></TableCell>
                                    <TableCell align="right"><b>Retweet</b></TableCell>
                                    <TableCell align="right"><b>Likes</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <tbody>
                                {data.map((post, index) => (
                                    <tr key={post.Timestamp + index}>
                                        <td>{post.Name}</td>
                                        <td>{post.UserTag}</td>
                                        <td>{new Date(post.Timestamp).toLocaleString()}</td>
                                        <td>{post.TweetContent}</td>
                                        <td>{post.Reply}</td>
                                        <td>{post.Retweet}</td>
                                        <td>{post.Likes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>
                </div>
            </List>

            {children}
        </div>
    );
};
