import Input from '../styles/Input.jsx';
import Button from '../styles/Button.jsx';

export default function SignUp() {
    return (
        <form>
            <Input placeholder='Nome' />
            <Input placeholder='E-mail' />
            <Button >Cadastrar</Button>
        </form>
    )
}