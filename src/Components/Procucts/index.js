import './_products.scss';

export default function ProductsComponent() {

    const productData = [
        {
            pName:"Coat",
            price:99,
            img:"coat2.jpg"
        },
        {
            pName:"Coat 2",
            price:10,
            img:"coat2.jpg"
        },
        {
            pName:"Coat 3",
            price:20,
            img:"coat2.jpg"
        },
        {
            pName:"Coat 4",
            price:50,
            img:"coat2.jpg"
        },
        {
            pName:"Coat 5",
            price:60,
            img:"coat2.jpg"
        },
        {
            pName:"Coat 7",
            price:70,
            img:"coat2.jpg"
        },

    ];

    return (
      <div className='product-container'>
        {
            productData.map((product, key)=> {
                return(
                    <div className='mx-5 p-3 product-card'>
                        <div className='product-image-container'>
                            <img src={require("../../assets/images/"+product.img)}/>
                        </div>
                        <div className='product-info'>
                            <h5><a href='#'>{product.pName}</a></h5>
                            <p className='product-price'>${product.price}</p>
                            <div className='product-rating'>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    );
}