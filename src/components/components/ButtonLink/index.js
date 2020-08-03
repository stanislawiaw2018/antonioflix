import React from 'react';

function ButtonLink(props){
    // props => { className: "O que alguém quiser passar", href: "/"}
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

//Para exportação desse componente em qualquer lugar do projeto
export default ButtonLink;