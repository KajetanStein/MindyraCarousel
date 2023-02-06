export const CarouselButton = ({buttonText, onClick}) => {
    return (
        <button onClick={onClick}>
            <p>{buttonText}</p>
        </button>
    )
}