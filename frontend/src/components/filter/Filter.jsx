import "./filter.css";

export default function Filter() {
  return (
    <div className="aside-filter">
      <p className="sort-heading">Sort items</p>
      <label htmlFor="low-to-high">Low to high</label>
      <input
        type="radio"
        name="price-filter"
        id="low-to-high"
        value={"low-to-high"}
      />
      <label htmlFor="high-to-low">High to Low</label>
      <input
        type="radio"
        name="price-filter"
        id="high-to-low"
        value={"high-to-low"}
      />
    </div>
  );
}
