import React from 'react'
import Detail from './Proddetails'
import { Container } from 'react-bootstrap'


const Prod = ({addtocart} ) => {
  return (
    <>
    <div className='myproduct'>
    <div className='prodd'>
<h1><b>Our Standard <span>Branded</span> Products</b></h1>
</div>
    <div className='prod-container'>
        <div className='my-prod'>
      {
        Detail.map((curElm) => {
            return(
                <>
                <div className='box' key={curElm.id}>
                    <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title} width={260} height={220}/>
                    </div>

                <div className='detail'>
                    <h5>{curElm.Name} </h5>
                    <div className='details'>
                    <h3>{curElm.Title} </h3>
                    <p>$ {curElm.Price} </p>
                    </div>
                    <button className='addtocart' onClick={() => addtocart (curElm)}>Add To Cart</button>
                </div>
                
                </div>
                </>
            )
        })
      }
      </div>
    </div>
    </div>
    </>
  )
}

export default Prod
