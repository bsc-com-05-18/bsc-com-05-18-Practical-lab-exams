import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserService from "./components/users/users.service";

const About = lazy(() => import("./components/about"))
const Footer = lazy(() => import("./components/footer"))
const Header = lazy(() => import("./components/header"))
const MainContent = lazy(() => import("./components/main"))
const Home = lazy(() => import("./components/main/home.main"))

const App = () => {
    const [search, setSearchTerm] = useState();
    const [searcheable, setSearcheableList] = useState([])

    const handleSearchTextChange = e => setSearchTerm({ [e.target.name]: e.target.value })

    useEffect(() => {
        UserService.getUsers()
            .then(response => setSearcheableList(response))
            .catch(error => console.log(error))
    }, [])

    return (<Router>
        <Suspense fallback={<div>Loading, Please wait...</div>}>
            {/* Header Section */}
            <Header searcheable={searcheable} onChange={handleSearchTextChange} />
            {/* Main Content */}
            <Switch>
                <Route exact path='/' render={ props => <Home {...props} searchTerm={search || null} />} />
                <Route exact path='/about' render={(props) => <About {...props} />} />
                <Route exact path='/services' render={(props) => <Home {...props} />} />
                <Route exact path='/support' render={(props) => <Home {...props} />} />
                <Route exact path='/pricing' render={(props) => <Home {...props} />} />
                <Route exact path='/account' render={(props) => <Home {...props} />} />

                <Route exact path='/dashboard' render={(props) => <Home {...props} />} />
                <Route exact path='/users/:id' render={props => <MainContent {...props} />} />
                <Route exact path='/users' render={(props) => <Home {...props} />} />
                <Route exact path='/messages' render={(props) => <Home {...props} />} />
                <Route exact path='/settings' render={(props) => <Home {...props} />} />
                <Route exact path='/resources' render={(props) => <Home {...props} />} />
            </Switch>
            {/* Footer Section */}
            <Footer />
        </Suspense>
    </Router>)
}

export default App;
