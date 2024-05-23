import "./header.css"

export const Header = () => {
    return (
        <header>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house01.jpg')" }}><a href="https://ukol-03-realitka.netlify.app/dum01.html">Dřevostavba v japonském stylu</a>
            </div>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house02.jpg')" }}><a href="https://ukol-03-realitka.netlify.app/dum02.html">Vilka na předměstí</a>
            </div>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house03.jpg')" }}><a href="https://ukol-03-realitka.netlify.app/dum03.html">Moderní dům s bazénem</a>
            </div>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house04.jpg')" }}><a href="https://ukol-03-realitka.netlify.app/dum04.html">Útulný domeček</a>
            </div>
        </header>
    )
}