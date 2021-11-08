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
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeLight = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
});

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route exact path="/sign-up">
                    <SignUp />
                </Route>
                <ThemeProvider theme={themeLight}>
                    <Switch>
                        <Route path="/calories">
                            <Header />
                            <Calories />
                        </Route>
                        <Route path="/statistics">
                            <Header />
                            <Statistics />
                        </Route>
                        <Route path="/forum">
                            <Header />
                            <Forum />
                        </Route>
                        <Route path="/forum/post/:id">
                            <Header />
                            <Post />
                        </Route>
                        <Route path="/user">
                            <Header />
                            <User />
                        </Route>
                        <Route path="/not-found">
                            <NotFound />
                        </Route>
                        <Route>
                            <Redirect to="/not-found" />
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Switch>
        </Router>
    );
}

export default App;
