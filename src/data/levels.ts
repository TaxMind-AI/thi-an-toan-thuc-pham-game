export interface Clue {
  id: string;
  position: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  isUnsafe: boolean;
  feedback: string;
}

export interface Level {
  id: number;
  imageUrl: string;
  mission: string;
  clues: Clue[];
}

export const levels: Level[] = [
  {
    id: 1,
    imageUrl: "/assets/scenes/level-1_1.png",
    mission: "Chào mừng Thám Tử Nhí! Hãy tìm 3 món đồ không an toàn trong bức tranh này nhé.",
    clues: [
      {
        id: 'clue-1-1',
        position: { top: 65, left: 20, width: 15, height: 15 },
        isUnsafe: true,
        feedback: "Chính xác! Chai tương ớt này không có nhãn mác, rất nguy hiểm!"
      },
      {
        id: 'clue-1-2',
        position: { top: 75, left: 40, width: 20, height: 10 },
        isUnsafe: true,
        feedback: "Đúng rồi! Xiên que này không được che đậy, ruồi có thể bâu vào."
      },
      {
        id: 'clue-1-3',
        position: { top: 50, left: 70, width: 18, height: 18 },
        isUnsafe: true,
        feedback: "Giỏi quá! Bịch bánh tráng trộn này không ghi ngày sản xuất và hạn sử dụng."
      },
      {
        id: 'clue-1-4',
        position: { top: 20, left: 10, width: 25, height: 25 },
        isUnsafe: false,
        feedback: "Đây là một chai nước suối có niêm phong cẩn thận. An toàn để uống!"
      }
    ]
  },
  {
    id: 2,
    imageUrl: "/assets/scenes/level-2_1.png",
    mission: "Canteen trường học trông thật sạch sẽ! Nhưng hãy cẩn thận tìm ra 3 điểm đáng ngờ nhé.",
    clues: []
  },
  {
    id: 3,
    imageUrl: "/assets/scenes/level-3_1.png",
    mission: "Siêu thị có rất nhiều đồ ăn ngon. Hãy giúp Thám Tử Nhí chọn 3 sản phẩm an toàn.",
    clues: []
  },
  {
    id: 4,
    imageUrl: "/assets/scenes/level-4_1.png",
    mission: "Vào bếp thôi! Tìm 3 dụng cụ hoặc hành động giúp đảm bảo vệ sinh khi nấu ăn.",
    clues: []
  },
  {
    id: 5,
    imageUrl: "/assets/scenes/level-5_1.png",
    mission: "Thử thách cuối cùng! Hãy tìm ra 3 gian hàng thực phẩm an toàn tại lễ hội ẩm thực này.",
    clues: []
  }
];
