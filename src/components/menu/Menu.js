import './Menu.css'

export default function Menu(props) {
    let {items} = props;

    return(
        <ul>fgrgrfgffergrgrg
            {
                items.map(item => <li className={'target'}>{item}</li>)
            }
        </ul>
    );
}