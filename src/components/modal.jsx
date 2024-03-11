import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Overlay from './overlay';
import { ButtonContrast } from './button';
import InputText from './input-text';
import styled from 'styled-components';

const modalRoot = document.getElementById('portal');

class ModalPortal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

export default function Modal({visibility, setIsVisible}) {

    if (visibility) {
        return (
            <ModalPortal>
                <ModalContent setIsVisible = {setIsVisible}/>
            </ModalPortal>
        )
    } 
    return null

}

const ModalContentStyled = styled.form`
    background: var(--bg);
    color: var(--white);
    padding: 1.5rem;
    border-radius: 0.5rem;
    position: fixed;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-inline-size: 24rem;

    .title {
        font: var(--headline2-semi-bold);
        margin: 0;
    }
`

const ModalContent = ({setIsVisible}) => {

    const form = useRef(null);
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current)
        const username = formData.get('username')
        navigator(`/${username}`)
        setIsVisible(false)
    }

    return (
        <Overlay>
            <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
                <h2 className="title">Busca a tu usuario</h2>
                <InputText type="text" autoComplete="off" name="username" placeholder="Username"/>
                <ButtonContrast text='Buscar'/>
            </ModalContentStyled>
        </Overlay>
    )
}

// export default ModalContent