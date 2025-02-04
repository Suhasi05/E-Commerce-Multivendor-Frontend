function SimilarProductCard() {
  return (
    <div className="group px-4 relative">
      <div className="card">
        <img
          className="card-media object-top rounded-md"
          src="https://media.istockphoto.com/id/1266818891/photo/beautiful-indian-woman-in-sari.jpg?s=2048x2048&w=is&k=20&c=Ekriz0lQ1iKhQA6wXdd3CPQTWtce-c1J3AmXnwxBWn0="
          alt=""
        />
      </div>
      <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
        <div className="name">
          <h1>Zara</h1>
          <p>Pink Dress</p>
        </div>
        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800">₹ 400</span>
          <span className="thin-line-through text-gray-400">₹ 999</span>
          <span className="text-primary-color font-semibold">60%</span>
        </div>
      </div>
    </div>
  );
}

export default SimilarProductCard;
