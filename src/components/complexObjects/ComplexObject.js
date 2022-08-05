import React from 'react'
import user from '../../assets/user.png'
import Star from '../star/Star'


const ComplexObject = () => {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


    function toggleFavorite(){
         setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
         })
    }

  return (
    <main>
    <article className="card">
        <img alt="" src={user} className="card--image" />
        <div className="card--info">
           <Star isFilled={contact.isFavorite} toggleFavorite={toggleFavorite}/>
            <h2 className="card--name">
                {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
        </div>
        
    </article>
</main>
  )
}

export default ComplexObject