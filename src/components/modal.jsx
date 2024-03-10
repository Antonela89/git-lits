import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalContent = () => {

    const form = useRef(null);
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({form});

        const formData = new FormData(form.current)
        console.log(formData.get('username'))
        const username = formData.get('username')
        navigator(`/${username}`)
    }

    return (
        <form ref={form} action="" onSubmit={handleSubmit}>
            <h2>Busca a tu usuario</h2>
            <input type="text" name="username" placeholder="Username"/>
            <button>Buscar</button>
        </form>
    )
}

export default ModalContent