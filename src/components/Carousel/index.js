import { useEffect, useState } from 'react';

import { CarouselHeader } from "../CarouselHeader"
import { CarouselPhoto } from "../CarouselPhoto"
import { CarouselFooter } from "../CarouselFooter"
import { githubFetcher } from '../../services/fetch';
import { Loading } from '../Loading';

const users = ['gaearon', 'acdlite', 'yyx990803', 'unclebob', 'martinfowler'];

export const Carousel = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState({});
    const [currentUser, setCurrentUser] = useState(0);

    const currentUserName = users[currentUser]

    const getUserPicture = async () => {
      setLoading(true);
      const photo = await githubFetcher.getGithubProfielPicture(currentUserName)
      setPhotos({...photos, [currentUserName]: photo});
      setLoading(false);
    }

    useEffect(() =>{
      if (!photos[currentUserName]) {
        getUserPicture().then(()=>{});
      }
    }, [currentUser])

    const changeUser = async (direction) => {
      setCurrentUser(direction ?
        currentUser === users.length-1 ? 0 : currentUser+1
        :
        currentUser === 0 ? users.length-1 : currentUser-1
      )
    };

    return (
      <Loading isLoading={loading}>
        <div className='carouselWrapper'>
          <CarouselHeader />
          <CarouselPhoto photo={photos[currentUserName]} user={currentUserName}/>
          <CarouselFooter changeUser={changeUser}/>
        </div> 
      </Loading>
    )
}
