import "./header.css"

export const Header = () => {
    return (
        <header>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house01.jpg')" }}><a href="/dum01.html">Dřevostavba v japonském stylu</a>
            </div>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house02.jpg')" }}><a href="/dum02.html">Vilka na předměstí</a>
            </div>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house03.jpg')" }}><a href="/dum03.html">Moderní dům s bazénem</a>
            </div>
            <div className="panel" style={{ backgroundImage: "url('https://apps.kodim.cz/daweb/trening-api/assets/house04.jpg')" }}><a href="/dum04.html">Útulný domeček</a>
            </div>
        </header>
    )
}