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
    imageUrl: "/assets/scenes/level-1.png",
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
  }
];
