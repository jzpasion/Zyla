import { useNavigate } from 'react-router-dom';

export default function Landing() {

    const navigate = useNavigate();

    function navigateToLetter() {
        navigate('/Letter');
    }

    return (
        <div style={{ backgroundColor: "red" }}>
            <h2>Landing</h2>
            <button onClick={navigateToLetter}>Default</button>
        </div>
    );
}