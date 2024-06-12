// Dashboard.jsx
import "../../../css/Dstyle.css";
import { Sidebar } from "../../../components/layout/Sidebar";

export function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="main" >
                <div className="dashborder-main">
                    <div className="dashborder-heading">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="dashborder-content">
                        <div className="dashborde-main-content">
                            <div className="dashborder-inner-content">
                                <div className="dashborder-inner-icon">
                                <i className="bx bx-bar-chart-alt-2 icon"></i>
                                </div>
                                <div className="trail-dashborder">
                                    <span className="trail-content">Your trial will expire on</span>
                                    <p className="trail-content-col">14 June 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashborde-main-content">
                            <div className="dashborder-inner-content">
                                <div className="dashborder-inner-icon">
                                    <i className="bx bx-bar-chart-alt-2 icon"></i>
                                </div>
                                <div className="trail-dashborder">
                                    <span className="trail-content">Your API Key</span>
                                    <p className="trail-content-col trail-content-text">CHW3ZEW1GSJ9TS98S87H4MT3UNQ2EJ1TE6LGGU199N1CARL0DTR6ICIHPD7ZROVG2UMV2MZ96IJVJ5CZ</p>
                                </div>
                                <div className="dashborder-trail-btn">
                                    <a href="#">< i className="bx bx-bar-chart-alt-2 icon"></i> Copy </a>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                </div>
                <div className="dashborder-main">
                    <div className="dashborder-heading">
                        <h2>Your Usage</h2>
                    </div>
                    <div className="dashborder-content">
                        <div className="dashborde-main-usage">
                            <div className="dashborder-inner-usage">
                                <div className="dashborder-usage-text">
                                <span>API credits consumed / available</span>
                                </div>
                                <div className="trail-usage">
                                    <span className="trail-usage">110 / 1,000</span>
                                    <p className="trail-content-usage">Updated every 30s</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashborde-main-usage">
                            <div className="dashborder-inner-usage">
                                <div className="dashborder-usage-text">
                                <span>Concurrency Usage</span>
                                </div>
                                <div className="trail-usage">
                                    <span className="trail-usage">0 / 5</span>
                                    <p className="trail-content-usage">Updated in real-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-5 lg:px-12">
                    <div className="rounded-lg border border-gray-200 bg-white pt-4 pb-3 px-4 md:px-5 flex overflow-hidden md:block lg:flex justify-between items-center mb-8 min-h-24">
                        <div className="flex items-center pr-4 flex-grow">
                            <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold p-2 text-gray-700 mr-5">
                                <span className="icon-time"></span>
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



