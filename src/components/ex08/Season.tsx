import React from 'react';

export default function Season() {
  const getSeason = () => {
    const currentMonth = new Date().getMonth() + 1;
    let season = '';
    
    switch (true) {
      case currentMonth >= 1 && currentMonth <= 3:
        season = 'Xuân';
        break;
      case currentMonth >= 4 && currentMonth <= 6:
        season = 'Hạ';
        break;
      case currentMonth >= 7 && currentMonth <= 9:
        season = 'Thu';
        break;
      case currentMonth >= 10 && currentMonth <= 12:
        season = 'Đông';
        break;
      default:
        season = 'Không xác định';
    }

    return season;
  };

  return (
    <div>
       
      <h3>Bây giờ là tháng: {new Date().getMonth()+1}</h3>
      <h3>Mùa hiện tại: {getSeason()}</h3>
    </div>
  );
}