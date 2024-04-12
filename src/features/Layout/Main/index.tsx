import { useState } from 'react';
import Products from '../../../pages/Products/products'
import CategoryNameSpecial from '../CategoryNameSpecial/CategoryNameSpecial'
import Offline from '../../components/Offline/Offline';



function Main() {
  const [online, setOnline] = useState<boolean>(true);

  window.addEventListener('offline', () => {
    setOnline(false);

  });

  if(!online){
    return (
    <Offline/>
  )
  }

    return (
      <div>
        <Products/>
        <CategoryNameSpecial/>
      </div>
    )
  }
  
  export default Main