import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ margin: 0, fontWeight: 600, color: '#e6eef8' }}>มหาวิทยาลัยศรีปทุม</p>
        <p style={{ margin: '6px 0' }} className="muted">คณะเทคโนโลยีสารสนเทศ • สาขาวิทยาการคอมพิวเตอร์</p>
        <p className="muted" style={{ margin: 0 }}>Contact: Facebook: Ton Nattapoom • Instagram: TXON_</p>
      </div>
    </footer>
  );
}

export default Footer;