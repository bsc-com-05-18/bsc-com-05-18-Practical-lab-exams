import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const About = lazy(() => import("./components/about"))
const Footer = lazy(() => import("./components/footer"))
const Header = lazy(() => import("./components/header"))
const MainContent = lazy(() => import("./components/main"))
const Home = lazy(() => import("./components/main/home.main"))

const App = () => {
    const [search, setSearchTerm] = useState();

    const handleSearchTextChange = e => setSearchTerm({ [e.target.name]: e.target.value })

    const HomeComponent = props => <Home { ...props } searchTerm={ search || null } />

    return (<Router>
        <Suspense fallback={<div>Loading, Please wait...</div>}>
            {/* Header Section */}
            <Header onChange={ handleSearchTextChange } />
            {/* Main Content */}
            <Switch>
                <Route exact path='/' render={props => <HomeComponent { ...props } /> } />
                <Route exact path='/about' render={(props) => <About props={props} />} />
                <Route exact path='/services' render={(props) => <HomeComponent { ...props } /> } />
                <Route exact path='/support' render={(props) => <Home props={props} />} />
                <Route exact path='/pricing' render={(props) => <Home props={props} />} />
                <Route exact path='/account' render={(props) => <Home props={props} />} />

                <Route exact path='/dashboard' render={(props) => <Home props={props} />} />
                <Route exact path='/users/:id' render={props => <MainContent props={props} />} />
                <Route exact path='/users' render={(props) => <Home props={props} />} />
                <Route exact path='/messages' render={(props) => <Home props={props} />} />
                <Route exact path='/settings' render={(props) => <Home props={props} />} />
            </Switch>
            {/* Footer Section */}
            <Footer />
        </Suspense>
    </Router>)
}

export default App;
