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
import Post from "./components/Post";
import User from "./components/UserPage/User";

// import { ThemeProvider, createTheme } from "@mui/material/styles";
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

// const themeLight = createTheme({
//     palette: {
//         background: {
//             default: "#f5f5f5",
//         },
//     },
// });

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
                {/* <ThemeProvider theme={themeLight}> */}
                <Switch>
                    <Route path={caloriesPagePath}>
                        <Header />
                        <Calories />
                    </Route>
                    <Route path={statisticsPagePath}>
                        <Header />
                        <Statistics />
                    </Route>
                    <Route path={forumPagePath}>
                        <Header />
                        <Forum />
                    </Route>
                    <Route path={forumPostPagePath}>
                        <Header />
                        <Post />
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
                {/* </ThemeProvider> */}
            </Switch>
        </Router>
    );
}

export default App;
