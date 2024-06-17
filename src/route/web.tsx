import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../views/pages/dashboard/Dashboard';
import { GetTweetsByProfileName } from "../views/pages/social-media-scrapping/twitter/get-tweets-by-profile-name";
import { GetTweetsFromHashtag } from "../views/pages/social-media-scrapping/twitter/get-tweets-from-hashtag";
import { GetTrendingHashtag } from "../views/pages/social-media-scrapping/twitter/get-tranding-hashtag";
import { GetTweetsByPostIds } from "../views/pages/social-media-scrapping/twitter/get-data-by-post-id";
import { GetCommenToTweetByPostIDs } from "../views/pages/social-media-scrapping/twitter/get_comments_for_tweets";
import {Login} from "../views/pages/auth/login/index"
import {PrivateRoute} from "./PrivateRoute"
export function WebRoute() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/twitter/tweets-by-profile-name" element={<PrivateRoute><GetTweetsByProfileName /></PrivateRoute>} />
            <Route path="/twitter/tweets-by-hashtag" element={<PrivateRoute><GetTweetsFromHashtag /></PrivateRoute>} />
            <Route path="/twitter/trending-hashtag" element={<PrivateRoute><GetTrendingHashtag /></PrivateRoute>} />
            <Route path="/twitter/get-tweets-by-post-ids" element={<PrivateRoute><GetTweetsByPostIds /></PrivateRoute>} />
            <Route path="/twitter/get-tweets-comments-by-postids" element={<PrivateRoute><GetCommenToTweetByPostIDs /></PrivateRoute>} />
        </Routes>
    );
}
