import './styles.css';

export default function Item (props) {
  return(
    <div >
      <button className={`menu-item${props.selected ? '-active' : ''}`}>{props.title}</button>
    </div>
  );
}