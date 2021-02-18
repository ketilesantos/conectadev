import React from 'react'

function Header () {
    return(
        <header className="header">
            <div  className="toolbar">
                <div>
                    <h1>Conecta dev</h1>
                </div>
            
                <div>
                    <button>Novo Post</button>
                    <span>im1 </span>
                    <span>im2 </span>
                </div>
            </div>
        </header>
    )
}

export default Header;