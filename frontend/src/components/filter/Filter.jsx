import "./filter.css";

export default function Filter() {
  return (
    <div className="aside-filter">
      <p className="sort-heading">Sort Items</p>
      <div className="sort-filter">
        <div className="sort sort-l-t-h">
          <label htmlFor="low-to-high">Low to high</label>
          <input
            type="radio"
            name="price-filter"
            id="low-to-high"
            value={"low-to-high"}
          />
        </div>
        <div className="sort sort-h-t-l">
          <label htmlFor="high-to-low">High to Low</label>
          <input
            type="radio"
            name="price-filter"
            id="high-to-low"
            value={"high-to-low"}
          />
        </div>
      </div>
    </div>
  );
}
