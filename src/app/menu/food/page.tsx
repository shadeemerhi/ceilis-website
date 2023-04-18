const FoodMenu = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/menu/food`);

  if (!response.ok) {
    throw new Error("Failed to fetch food menu");
  }

  const data = await response.json();

  console.log("HERE IS DATA", data);

  return (
    <div className="border-2 border-red-500">
      <div>Food Menu</div>
    </div>
  );
};

export default FoodMenu;
