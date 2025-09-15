import { memo } from 'react'; 
const Buttoncomp = memo(({ name, onClick }) => {
    console.log(name);
    return (
        <button onClick={onClick}>{name}</button>
    );
});

export default Buttoncomp;
