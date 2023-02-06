export const CarouselPhoto = ({photo, user}) =>{
    return (
        <>
            <img src={photo} alt={user}/>
            <h1>{user}</h1>
        </>
    )
}