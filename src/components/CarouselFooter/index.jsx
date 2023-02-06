import { CarouselButton } from '../CarouselButton'

export const CarouselFooter = ({changeUser}) => {

    const onPrevbuttonClick = () => changeUser(0);
    const onNextbuttonClick = () => changeUser(1);

    return (
        <div className='carouselFooter'>
            <CarouselButton buttonText="Prev" onClick={onPrevbuttonClick}/>
            <CarouselButton buttonText="Next" onClick={onNextbuttonClick}/>
        </div>
    )
}