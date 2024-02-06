import "./header.css"
import  header from "../../images/header.jpg"



export const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitles__lg">Blog It</span>
            <span className="headerTitles__sm">Write what you feel..</span>
        </div>
        <img src={header} alt="" className="headerImg" />
    </div>
  )
}
