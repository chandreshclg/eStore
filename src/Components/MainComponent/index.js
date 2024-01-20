import ProductsComponent from '../Procucts';
import SideNavComponent from '../SideNav';
import './_main-component.scss'

export default function MainComponent() {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-4'>
              <SideNavComponent/>
            </div>
            <div className='col-lg-10 col-md-9 col-sm-8'>
              <ProductsComponent/>
            </div>
          </div>
        </div>
      </div>
    );
  }