import './styles.css';

export default function Item (props) {
  return(
    <div className="div-button">
      <button className={`menu-item${props.selected ? '-active' : ''}`}>{props.title}</button>
    </div>
  );
}