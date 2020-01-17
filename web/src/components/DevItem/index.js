import React from 'react';

import './styles.css';

function DevItem({ dev }){

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <div class='actions'>
                <a target="_blank" href={"https://github.com/"+dev.github_username}>Acessar perfil no GitHub</a>
                <a href="" className="btn btn-danger">
                    Excluir
                </a>
                <a href="" className="btn btn-primary">
                    Editar
                </a>
            </div>
        </li>
    )
}

export default DevItem