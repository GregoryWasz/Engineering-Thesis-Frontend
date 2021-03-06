import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import SignIn from "./components/SignInPage/SignIn";
import SignUp from "./components/SignUpPage/SignUp";
import NotFound from "./components/NotFoundPage/NotFound";
import Statistics from "./components/StatisticsPage/Statistics";
import Header from "./components/CommonComponents/Header";
import Calories from "./components/CaloriesPage/Calories";
import Forum from "./components/ForumPage/Forum";
import SinglePostPage from "./components/PostPage/SinglePostPage";
import User from "./components/UserPage/User";
import {
    signUpPagePath,
    notFoundPagePath,
    signInPagePath,
    caloriesPagePath,
    statisticsPagePath,
    forumPagePath,
    userPagePath,
    forumPostPagePath,
} from "./components/Consts/paths";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={signInPagePath}>
                    <SignIn />
                </Route>
                <Route exact path={signUpPagePath}>
                    <SignUp />
                </Route>
                <Switch>
                    <Route path={caloriesPagePath}>
                        <Header />
                        <Calories />
                    </Route>
                    <Route path={statisticsPagePath}>
                        <Header />
                        <Statistics />
                    </Route>
                    <Route exact path={forumPagePath}>
                        <Header />
                        <Forum />
                    </Route>
                    <Route exact path={forumPostPagePath}>
                        <Header />
                        <SinglePostPage />
                    </Route>
                    <Route path={userPagePath}>
                        <Header />
                        <User />
                    </Route>
                    <Route path={notFoundPagePath}>
                        <NotFound />
                    </Route>
                    <Route>
                        <Redirect to={notFoundPagePath} />
                    </Route>
                </Switch>
            </Switch>
        </Router>
    );
}

export default App;
