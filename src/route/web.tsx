import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../views/pages/dashboard/Dashboard';
import { GetTweetsByProfileName } from "../views/pages/social-media-scrapping/twitter/get-tweets-by-profile-name";
import { GetTweetsFromHashtag } from "../views/pages/social-media-scrapping/twitter/get-tweets-from-hashtag";
import { GetTrendingHashtag } from "../views/pages/social-media-scrapping/twitter/get-tranding-hashtag";
import { GetTweetsByPostIds } from "../views/pages/social-media-scrapping/twitter/get-data-by-post-id";
import { GetCommenToTweetByPostIDs } from "../views/pages/social-media-scrapping/twitter/get_comments_for_tweets";

export function WebRoute() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/twitter/tweets-by-profile-name" element={<GetTweetsByProfileName />} />
            <Route path="/twitter/tweets-by-hashtag" element={<GetTweetsFromHashtag />} />
            <Route path="/twitter/trending-hashtag" element={<GetTrendingHashtag />} />
            <Route path="/twitter/get-tweets-by-post-ids" element={<GetTweetsByPostIds />} />
            <Route path="/twitter/get-tweets-comments-by-postids" element={<GetCommenToTweetByPostIDs />} />

        </Routes>
    );
}
