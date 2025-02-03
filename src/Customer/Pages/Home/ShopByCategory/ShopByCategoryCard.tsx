function ShopByCategoryCard() {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color">
        <img className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://imgs.search.brave.com/V_GN3_MA0fLaZp69JiPvXcx1tlJ57UxGdziTzzTzlgU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY3LzQyLzM2/LzM2MF9GXzE2NzQy/MzY3MV9pTGZPdjF1/Q3EzaXdUcWxraG5m/VHVyckIyZG9kaEJQ/Ry5qcGc"
          alt=""
        />
      </div>
      <h1>Home Decor</h1>
    </div>
  );
}

export default ShopByCategoryCard;
