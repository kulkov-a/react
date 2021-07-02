
export default function Menu(props) {
    let {items} = props;

    return(
        <ul>
            {
                items.map(item => <li>{item}</li>)
            }
        </ul>
    );
}