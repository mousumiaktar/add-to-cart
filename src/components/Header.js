import './header.css';

const Header = ({cart}) => {
    
    return (
        <>
            <div className='hearder-area'>
                <div className='header-description'>
                    <p>hoodies</p>
                    <p>size</p>
                    <p>Reset</p>
                </div>
                <div className='header-field'>
                    <div>
                        <label htmlFor="search">Search</label>
                        <input type="text" />
                    </div>
                    <div>
                        <button>Add To Cart{cart?.length}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;