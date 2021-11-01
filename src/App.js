import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Statistics from "./components/Statistics";
import Header from "./components/Header";
import Calories from "./components/Calories";
import Forum from "./components/Forum";
import Post from "./components/Post";
import User from "./components/User";
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
