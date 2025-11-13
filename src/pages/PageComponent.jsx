import React from "react";
// 1. Import Component ทั้งหมดที่เราแยกไฟล์ออกมา
// (ใช้ ../ เพื่อถอยกลับออกจาก pages/ แล้วเข้าไปใน components/)
import Adder from "../components/Adder";
import Counter from "../components/Counter";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperatures";

// 2. Main Page Component (ที่เหลือแค่ส่วนจัดวาง Layout)
export default function PageComponent() {
  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px' }}>

      {/* แถวที่ 1: Adder, Timer, Counter */}
      <div className="d-flex justify-content-center align-items-start flex-wrap gap-3 mt-4">
        <Adder />
        <Timer />
        <Counter />
      </div>

      {/* แถวที่ 2: Temperatures */}
      <div className="d-flex justify-content-center align-items-start flex-wrap gap-3 mt-4">
        <Temperatures />
      </div>

    </div>
  );
}