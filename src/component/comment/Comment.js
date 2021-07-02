export default function Comment(props) {
    let {item} = props;
    return(
        <div>{item.id} - {item.name} - {item.email}</div>
    );
}