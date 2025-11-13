import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

function Products() {
  const { addToCart } = useContext(CartContext);

  // 🔹 สร้างสินค้าเริ่มต้น (mock data)
  const [products, setProducts] = useState([]);

  // 🔹 จำลองการโหลดสินค้า (จาก API)
  useEffect(() => {
    const sampleProducts = [
    { id: 1, name: "The Legend of Zelda", price: 15.13, color: "#7CFC00" },
{ id: 2, name: "Halo Infinite", price: 9.36, color: "#9370DB" },
{ id: 3, name: "Final Fantasy VII Remake", price: 41.83, color: "#FF69B4" },
{ id: 4, name: "God of War", price: 15.13, color: "#7CFC00" },
{ id: 5, name: "Forza Horizon 5", price: 9.36, color: "#9370DB" },
{ id: 6, name: "Cyberpunk 2077", price: 41.83, color: "#FF69B4" },
{ id: 7, name: "Animal Crossing", price: 18.25, color: "#00CED1" },
{ id: 8, name: "Elden Ring", price: 22.40, color: "#FFD700" },
{ id: 9, name: "Resident Evil Village", price: 17.90, color: "#708090" },
{ id: 10, name: "Horizon Zero Dawn", price: 35.50, color: "#FF8C00" },
{ id: 11, name: "Monster Hunter World", price: 27.99, color: "#4682B4" },
{ id: 12, name: "Assassin's Creed Valhalla", price: 52.10, color: "#1E90FF" },
{ id: 13, name: "Red Dead Redemption 2", price: 48.75, color: "#A0522D" },
{ id: 14, name: "Apex Legends", price: 23.45, color: "#B8860B" },
{ id: 15, name: "Genshin Impact", price: 29.60, color: "#D3D3D3" },
{ id: 16, name: "Spiderman", price: 16.20, color: "#2E8B57" },
{ id: 17, name: "Call of Duty: Modern Warfare", price: 30.33, color: "#696969" },
{ id: 18, name: "Ghost of Tsushima", price: 21.99, color: "#CD853F" },
{ id: 19, name: "The Witcher 3", price: 42.00, color: "#228B22" },
{ id: 20, name: "Super Mario Odyssey", price: 13.50, color: "#FF6347" },
{ id: 21, name: "Dark Souls III", price: 19.99, color: "#DC143C" },
{ id: 22, name: "Days Gone", price: 25.50, color: "#8B4513" },
{ id: 23, name: "Overwatch", price: 31.20, color: "#DAA520" },
{ id: 24, name: "Death Stranding", price: 28.70, color: "#8A2BE2" },
{ id: 25, name: "Skyrim", price: 40.15, color: "#483D8B" },
{ id: 26, name: "Persona 5", price: 34.90, color: "#6B8E23" },
{ id: 27, name: "Nier Automata", price: 18.60, color: "#BC8F8F" },
{ id: 28, name: "Street Fighter 6", price: 22.99, color: "#CD5C5C" },
{ id: 29, name: "Metal Gear Solid V", price: 37.50, color: "#A9A9A9" },
{ id: 30, name: "Far Cry 6", price: 26.40, color: "#32CD32" },
{ id: 31, name: "Bloodborne", price: 39.25, color: "#00BFFF" },
{ id: 32, name: "Fallout 4", price: 33.10, color: "#F0E68C" },
{ id: 33, name: "Fortnite", price: 41.90, color: "#FF69B4" },
{ id: 34, name: "Mortal Kombat 11", price: 17.00, color: "#FFA500" },
{ id: 35, name: "League of Legends", price: 24.80, color: "#7B68EE" },
{ id: 36, name: "PUBG", price: 14.99, color: "#20B2AA" },
{ id: 37, name: "Rocket League", price: 19.49, color: "#BA55D3" },
{ id: 38, name: "Battlefield V", price: 32.60, color: "#A0522D" },
{ id: 39, name: "Doom Eternal", price: 43.75, color: "#708090" },
{ id: 40, name: "The Last of Us Part II", price: 20.20, color: "#FF4500" },
{ id: 41, name: "Super Smash Bros", price: 36.60, color: "#87CEFA" },
{ id: 42, name: "Gran Turismo 7", price: 28.30, color: "#BDB76B" },
{ id: 43, name: "Uncharted 4", price: 49.50, color: "#EEE8AA" },
{ id: 44, name: "Cyber Shadow", price: 25.99, color: "#8FBC8F" },
{ id: 45, name: "For Honor", price: 27.15, color: "#E9967A" },
{ id: 46, name: "Evil Within 2", price: 55.00, color: "#FF0000" },
{ id: 47, name: "Titanfall 2", price: 47.30, color: "#A52A2A" },
{ id: 48, name: "Dead Space", price: 19.75, color: "#2F4F4F" },
{ id: 49, name: "Starfield", price: 38.40, color: "#87CEEB" },
{ id: 50, name: "A Way Out", price: 12.90, color: "#1E90FF" }
      /*{ id: 1, name: "ไก่", price: 15.13, image: "working in progess.jpg" },
    { id: 2, name: "หมี", price: 9.36, image: "working in progess.jpg" },
    { id: 3, name: "ปลายักษ์", price: 41.83, image: "working in progess.jpg" },
    { id: 4, name: "นกกระยุง", price: 15.13, image: "working in progess.jpg" },
    { id: 5, name: "ไดโนเสาร์", price: 9.36, image: "working in progess.jpg" },
    { id: 6, name: "หมีปลา", price: 41.83, image: "working in progess.jpg" },
    { id: 7, name: "กระต่ายน้อย", price: 18.25, image: "working in progess.jpg" },
    { id: 8, name: "สุนัขจิ้งจอก", price: 22.40, image: "working in progess.jpg" },
    { id: 9, name: "แมวดำ", price: 17.90, image: "working in progess.jpg" },
    { id: 10, name: "เสือโคร่ง", price: 35.50, image: "working in progess.jpg" },
    { id: 11, name: "เพนกวิน", price: 27.99, image: "working in progess.jpg" },
    { id: 12, name: "วาฬสีน้ำเงิน", price: 52.10, image: "working in progess.jpg" },
    { id: 13, name: "ช้างป่า", price: 48.75, image: "working in progess.jpg" },
    { id: 14, name: "ลิงกัง", price: 23.45, image: "working in progess.jpg" },
    { id: 15, name: "ม้าลาย", price: 29.60, image: "working in progess.jpg" },
    { id: 16, name: "เต่าทะเล", price: 16.20, image: "working in progess.jpg" },
    { id: 17, name: "หมาป่า", price: 30.33, image: "working in progess.jpg" },
    { id: 18, name: "กวาง", price: 21.99, image: "working in progess.jpg" },
    { id: 19, name: "จระเข้", price: 42.00, image: "working in progess.jpg" },
    { id: 20, name: "ปลาดาว", price: 13.50, image: "working in progess.jpg" },
    { id: 21, name: "ปูแดง", price: 19.99, image: "working in progess.jpg" },
    { id: 22, name: "หมูป่า", price: 25.50, image: "working in progess.jpg" },
    { id: 23, name: "นกฮูก", price: 31.20, image: "working in progess.jpg" },
    { id: 24, name: "แมงกะพรุน", price: 28.70, image: "working in progess.jpg" },
    { id: 25, name: "หมึกยักษ์", price: 40.15, image: "working in progess.jpg" },
    { id: 26, name: "สิงโตทะเล", price: 34.90, image: "working in progess.jpg" },
    { id: 27, name: "นากน้ำ", price: 18.60, image: "working in progess.jpg" },
    { id: 28, name: "กุ้งแม่น้ำ", price: 22.99, image: "working in progess.jpg" },
    { id: 29, name: "แมวป่า", price: 37.50, image: "working in progess.jpg" },
    { id: 30, name: "งูเขียว", price: 26.40, image: "working in progess.jpg" },
    { id: 31, name: "นกยูง", price: 39.25, image: "working in progess.jpg" },
    { id: 32, name: "แพนด้า", price: 33.10, image: "working in progess.jpg" },
    { id: 33, name: "นกฟลามิงโก้", price: 41.90, image: "working in progess.jpg" },
    { id: 34, name: "แมวส้ม", price: 17.00, image: "working in progess.jpg" },
    { id: 35, name: "ม้าน้ำ", price: 24.80, image: "working in progess.jpg" },
    { id: 36, name: "แมลงปอ", price: 14.99, image: "working in progess.jpg" },
    { id: 37, name: "ผีเสื้อ", price: 19.49, image: "working in progess.jpg" },
    { id: 38, name: "ลิงอุรังอุตัง", price: 32.60, image: "working in progess.jpg" },
    { id: 39, name: "ปลาฉลาม", price: 43.75, image: "working in progess.jpg" },
    { id: 40, name: "นกแก้ว", price: 20.20, image: "working in progess.jpg" },
    { id: 41, name: "แมวน้ำ", price: 36.60, image: "working in progess.jpg" },
    { id: 42, name: "กวางเรนเดียร์", price: 28.30, image: "working in progess.jpg" },
    { id: 43, name: "เสือขาว", price: 49.50, image: "working in progess.jpg" },
    { id: 44, name: "กระรอกบิน", price: 25.99, image: "working in progess.jpg" },
    { id: 45, name: "นกกระทุง", price: 27.15, image: "working in progess.jpg" },
    { id: 46, name: "มังกร", price: 55.00, image: "working in progess.jpg" },
    { id: 47, name: "นกอินทรี", price: 47.30, image: "working in progess.jpg" },
    { id: 48, name: "ค้างคาว", price: 19.75, image: "working in progess.jpg" },
    { id: 49, name: "โลมา", price: 38.40, image: "working in progess.jpg" },
    { id: 50, name: "ปลากัด", price: 12.90, image: "working in progess.jpg" },*/
    ];
    setProducts(sampleProducts);
  }, []);
  
  // ✅ เมื่อกด Add to cart
  const handleAddToCart = (product) => {
    addToCart(product); // เพิ่มเข้าตะกร้า
    setProducts(products.filter((p) => p.id !== product.id)); // ลบออกจากหน้า products
  };

  return (
    <div className="products-page">
      <h2 style={{ textAlign: 'center' }}>Products</h2>

      <div className="product-grid" style={{ maxWidth: 1100, margin: '16px auto' }}>
        {products.map((product) => (
          <div key={product.id} className="card product-card">
            <div className="product-thumb" style={{ background: product.color }} />
            <h4 style={{ marginTop: 6 }}>{product.name}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="price">${product.price.toFixed(2)}</div>
              <button className="btn" onClick={() => handleAddToCart(product)}>Add</button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && <p style={{ marginTop: '30px', textAlign: 'center' }}>🛒 All items are in your cart!</p>}
    </div>
  );
}

export default Products;
