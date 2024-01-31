import React from 'react'
import { SubHeading,MenuItem } from '../../components';
import {images,data} from '../../constants';
import { Link } from 'react-router-dom';


const FullMenu = () => (
  <div className='app__specialMenu flex__center section__padding'>

{/***********************************STARTERS*******************************************************/}

    <div className='app__specialMenu-title' style={{marginTop:'5rem'}}>
      <SubHeading title="Everybody needs to start somewhere!" />
      <h1 className='headtext__cormorant'>For Starters</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Appetizers</p>
        <div className='app__specialMenu-menu_items' >
          {data.appetizers.map((appetizer,index)=>(
            <MenuItem key={appetizer.title + index} title={appetizer.title} price= {appetizer.price} tags={appetizer.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img' style={{marginTop:'6rem'}} >
          <img src={images.menu3} alt="menu" />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Salads</p>
        <div className='app__specialMenu-menu_items' >
          {data.salads.map((salad,index) => (
            <MenuItem key={salad.title + index} title={salad.title} price={salad.price} tags={salad.tags}/>
          ))}
        </div>
      </div>
    </div>

{/***********************************MAIN MENU *******************************************************/}
    

    <div className='app__specialMenu-title' >
      <SubHeading title="For hungry people!" />
      <h1 className='headtext__cormorant'>Main Menu</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Meat & Rips</p>
        <div className='app__specialMenu-menu_items' >
          {data.meat.map((meat,index)=>(
            <MenuItem key={meat.title + index} title={meat.title} price= {meat.price} tags={meat.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img' style={{marginTop:'6rem'}} >
          <img src={images.menu2} alt="menu" />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Vegan Alternative</p>
        <div className='app__specialMenu-menu_items' >
          {data.vegan.map((vegan,index) => (
            <MenuItem key={vegan.title + index} title={vegan.title} price={vegan.price} tags={vegan.tags}/>
          ))}
        </div>
      </div>
    </div>


{/***********************************DESSERT***************************************************/}

<div className='app__specialMenu-title'>
      <SubHeading title="One Sin per day is no Sin!" />
      <h1 className='headtext__cormorant'>For the sweet Aftertaste</h1>
    </div>

    <div className='app__specialMenu-menu' style={{width:'50%'}}>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Desserts</p>
        <div className='app__specialMenu-menu_items' >
          {data.desserts.map((dessert,index)=>(
            <MenuItem key={dessert.title + index} title={dessert.title} price= {dessert.price} tags={dessert.tags}/>
          ))}
        </div>
      </div>
    </div>


{/****************************************DRINKS**************************************************/}
    
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu Thats first your Power" />
      <h1 className='headtext__cormorant'>Special Drinks</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items' >
          {data.wines.map((wine,index)=>(
            <MenuItem key={wine.title + index} title={wine.title} price= {wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img' >
          <img src={images.menu} alt="menu" />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items' >
          {data.cocktails.map((cocktail,index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>


    
{/******************************************************************************************/}

    <div style={{marginTop:'15px'}}>
      <Link to="/">        
        <button type="button" className="custom__button">
          Back
        </button>
      </Link>
    </div>
  </div>
);

export default FullMenu