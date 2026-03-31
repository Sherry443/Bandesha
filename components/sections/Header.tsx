'use client';

import { usePathname } from 'next/navigation';
import HeaderStyle1 from '../HeaderStyle1';
import HeaderStyle2 from '../HeaderStyle2';
import HeaderStyle3 from '../HeaderStyle3';

const Header = () => {
    const pathname = usePathname();
    let headerStyle = <HeaderStyle1 />

    if(pathname == '/home-2') {
        headerStyle = <HeaderStyle2 />
    } else if(pathname == '/home-5') {
        headerStyle = <HeaderStyle3 />
    }

    return (
        <>        
            {headerStyle}
        </>
    )
}

export default Header;