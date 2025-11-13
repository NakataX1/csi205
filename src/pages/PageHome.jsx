import React from 'react';

const homeStyle = {
  padding: '1.5rem',
  backgroundColor: '#fff',
  borderRadius: '8px',
  maxWidth: '800px',
  margin: '0 auto',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  color: '#1f2937', /* เพิ่มบรรทัดนี้ */
};

function PageHome() {
  return (
    <div className="card home-card" style={homeStyle}>
      <h2 style={{ textAlign: 'center', color: '#111827' }}>หน้าแนะนำตัว</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {/* You can add an avatar image here */}
      </div>

      <p><strong>รหัสนักศึกษา:</strong> 67158116</p>
      <p><strong>ชื่อ-สกุล:</strong> ณัฐภูมิ ใจฮวบ</p>
      <p><strong>ชั้นปี/สาขา/คณะ:</strong> ชั้นปีที่ 2 / สาขาวิทยาการคอมพิวเตอร์  / คณะเทคโนโลยีสารสนเทศ </p>
      <p><strong>มหาวิทยาลัย:</strong> มหาวิทยาลัยศรีปทุม</p>
      <h3 style={{ color: '#111827' }}>แนะนำตัวเอง</h3>
      <p>
        สวัสดีครับ ผมชื่อต้นครับ inwtonq
      </p>
    </div>
  );
}

export default PageHome;