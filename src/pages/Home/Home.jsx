import { Link } from "react-router-dom"
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <div className="container home">
        <Link to="/aouth">Aouth page</Link>
      </div>
    </div>
  )
}

export default Home