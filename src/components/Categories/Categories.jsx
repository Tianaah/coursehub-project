import "./Categories.css";

const categories = [
  "Business Management",
  "Arts & Design",
  "Personal Development",
  "UI/UX Design",
  "Graphic Design",
  "Digital Marketing",
  "Exclusive Man",
  "Product Design",
  "Video & Photoraphy",
];

function Categories() {
  return (
    <section className="categories">
      <h2>Browse By Categories</h2>

      <div className="categories_grid">
        {categories.map((category, index) => (
          <div key={index} className="category_card">
            <span>{category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Categories };
