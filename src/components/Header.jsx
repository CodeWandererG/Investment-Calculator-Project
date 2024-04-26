import image from "../assets/investment-calculator-logo.png"

export function Header(){
    return<header id="header">
        <img src={image} alt="Logo Showing Money Bag"/>
        <h1> Investment Calculator </h1>
    </header>
}