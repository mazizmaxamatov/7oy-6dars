import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';


export default function Nav() {
    return (
        <>


            <nav className=''>
                <div className="logo">
                    <h1 className="">GREENSHOP</h1>
                </div>
                <ul>
                    <li className=''><a href="">Home</a></li>
                    <li><a href="">Bolg</a></li>
                </ul>
               
                <div className="nav_right">
                    <Search />
                    <Bell/>
                    <ShoppingCart/>

                    <button>Login</button>
                </div>

            </nav>


        </>
    );
}