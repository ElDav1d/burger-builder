import React from 'react';

import Auxiliary from '../../hoc/Auxiliary'

const layout = ( props ) => (
    <Auxiliary>            
        <div>Toolbar, SiderDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;