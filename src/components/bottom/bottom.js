import React from 'react';
import './bottom.css';

function Bottom(props) {
  return (
    <div className="Bottom">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title">VietMap</div>
            <ul className="list-unstyled">
              <li>Giới thiệu</li>
              <li>Liên hệ</li>
              <li>Tuyển dụng</li>
            </ul>
          </div>
          <div className="col">
            <div className="title">Sản phẩm</div>
            <ul className="list-unstyled">
              <li>Maps API</li>
              <li>Giải pháp GIS</li>
            </ul>
          </div>
          <div className="col">
            <div className="title">Hỗ trợ</div>
            <ul className="list-unstyled">
              <li>Tài liệu</li>
              <li>Demo Maps API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;