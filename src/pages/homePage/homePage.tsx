import { Link } from "react-router"
const Home = ()=>{
    return(
        <div>
            <h1>Home Page</h1>
            <nav>
                <Link to={'/quiz'} >This is quiz</Link><br />
                <Link to={'/stepper'} >This is stepper</Link><br />
                <Link to={'/todolist'} >This is todo</Link>

            </nav>

        </div>
    )
}

export default Home