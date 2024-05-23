import "./estate.css"

export const Estate = ({title, text, price, city, phone, name, photo}) => {
    return(
        <div className="container">
            <h1>{title}</h1>
            <p>{text}</p>
            <div className="info">
                <p>Lokalita: {city}</p>
                <p>Cena: {price} Kč</p>
                <p>Kontakt: {name}</p>
                <p>Telefon: {phone}</p>
            </div>
            <img src={photo} alt="" />
        </div>
    )
}