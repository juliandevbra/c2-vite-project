import CardStyles from '../Styles/Card.module.css'
console.log(CardStyles)

const Card = ({item}) => {
    // console.log(item)
    const {img, tipo, precio} = item
  return (
    <div className={CardStyles.cardContainer}>
        {/*  Explicando css
            <h2 className="titulo">Otro ejemplo css</h2> 
        */} 
        <img src={img} alt={tipo} className={CardStyles.cardImg}/>
        <h4>{tipo}</h4>
        <h4>${precio}</h4>
        <button>🛒</button>
    </div>
  )
}

export default Card