import { Route } from "wouter";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";

function App() {
    return (
        <>
            <Route path="/" component={Home} />
            <Route path="/posts" component={Posts} />
        </>
    );
}

export default App;
