import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../componenst/Header/header';
import { Estate } from '../componenst/Estate/estate';


const windowLocationPathname = window.location.pathname.slice(1, 6)

const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka/${windowLocationPathname}`)
const data = await response.json()

const { title, text, price, city, contact, photo} = data

const Homepage = () => {
  return(
    <>
      <Header title={title} />
      <Estate title={title} text={text} price={price} city={city} name={contact.name} phone={contact.phone}  photo={photo} />
    </>
  )
}

document.querySelector('#root').innerHTML = render(
  <>
    <Homepage />
  </>
);

console.log(window.location.pathname)
