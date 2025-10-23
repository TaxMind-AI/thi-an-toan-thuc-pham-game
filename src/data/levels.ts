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
    imageUrl: "/assets/scenes/level-1_2.png",
    mission: "Chào mừng Thám Tử Nhí! Hãy tìm ra điểm không an toàn trong bức tranh này nhé.",
    clues: [
      {
        id: 'clue-1-1',
        position: { top: 60, left: 55, width: 25, height: 20 },
        isUnsafe: true,
        feedback: "Chính xác! Người bán hàng dùng tay trần lấy đá sau khi cầm tiền rất mất vệ sinh."
      }
    ]
  },
  {
    id: 2,
    imageUrl: "/assets/scenes/level-2_2.png",
    mission: "Canteen trường học trông thật sạch sẽ! Nhưng hãy cẩn thận tìm ra điểm đáng ngờ nhé.",
    clues: [
      {
        id: 'clue-2-1',
        position: { top: 65, left: 40, width: 30, height: 20 },
        isUnsafe: true,
        feedback: "Đúng vậy! Thức ăn không được che đậy cẩn thận sẽ dễ bị ruồi bâu và vi khuẩn xâm nhập."
      }
    ]
  },
  {
    id: 3,
    imageUrl: "/assets/scenes/level-3_2.png",
    mission: "Siêu thị có rất nhiều đồ ăn ngon. Hãy giúp Thám Tử Nhí tìm ra sản phẩm không an toàn.",
    clues: [
      {
        id: 'clue-3-1',
        position: { top: 55, left: 60, width: 20, height: 20 },
        isUnsafe: true,
        feedback: "Cẩn thận! Hộp sữa bị phồng, biến dạng có thể đã bị hỏng."
      }
    ]
  },
  {
    id: 4,
    imageUrl: "/assets/scenes/level-4_2.png",
    mission: "Vào bếp thôi! Tìm ra một hành động không đảm bảo vệ sinh khi nấu ăn.",
    clues: [
      {
        id: 'clue-4-1',
        position: { top: 50, left: 30, width: 40, height: 25 },
        isUnsafe: true,
        feedback: "Rất đúng! Dùng chung thớt cho thịt sống và rau củ chín gây nhiễm khuẩn chéo, rất nguy hiểm."
      }
    ]
  },
  {
    id: 5,
    imageUrl: "/assets/scenes/level-5_2.png",
    mission: "Thử thách cuối cùng! Hãy tìm ra gian hàng thực phẩm không an toàn tại lễ hội ẩm thực này.",
    clues: [
      {
        id: 'clue-5-1',
        position: { top: 60, left: 15, width: 30, height: 25 },
        isUnsafe: true,
        feedback: "Giỏi lắm! Rác thải để tràn lan ngay cạnh khu vực chế biến là cực kỳ mất vệ sinh."
      }
    ]
  }
];
