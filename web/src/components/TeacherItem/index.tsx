import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

interface DataProps {
    data: {
        avatar: string,
        bio: string,
        cost: number,
        id: number,
        name: string,
        subject: string,
        user_id: number,
        whatsapp: string
    }
}

const TeacherItem: React.FC<DataProps> = ({ data }) => {
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src={data.avatar}
                    alt={data.name}
                />
                <div>
                    <strong>{data.name}</strong>
                    <span>{data.subject}</span>
                </div>
            </header>

            <p>{data.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {data.cost.toFixed(2)}</strong>
                </p>
                <button onClick={() => {window.open(`https://wa.me/${data.whatsapp}`)}}>
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;