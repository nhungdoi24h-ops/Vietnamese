const lessons = [
// 原有基础课文保留
{
title:"Bài 1 - Chào hỏi",
words:[
{vn:"Xin chào",cn:"你好",example:"Xin chào, tôi là Lan."},
{vn:"Chào buổi sáng",cn:"早上好",example:"Chào buổi sáng!"},
{vn:"Chào buổi tối",cn:"晚上好",example:"Chào buổi tối!"},
{vn:"Tạm biệt",cn:"再见",example:"Tạm biệt nhé."},
{vn:"Cảm ơn",cn:"谢谢",example:"Cảm ơn bạn."},
{vn:"Xin lỗi",cn:"对不起",example:"Xin lỗi."},
{vn:"Không có gì",cn:"不客气",example:"Không có gì."}
]
},
{
title:"Bài 2 - Gia đình",
words:[
{vn:"Bố",cn:"爸爸",example:"Bố tôi rất hiền."},
{vn:"Mẹ",cn:"妈妈",example:"Mẹ tôi nấu ăn."},
{vn:"Anh",cn:"哥哥",example:"Anh tôi đi làm."},
{vn:"Chị",cn:"姐姐",example:"Chị tôi là giáo viên."},
{vn:"Em",cn:"弟弟/妹妹",example:"Em tôi học lớp 3."},
{vn:"Ông",cn:"爷爷",example:"Ông tôi 70 tuổi."},
{vn:"Bà",cn:"奶奶",example:"Bà tôi rất khỏe."}
]
},
{
title:"Bài 3 - Số đếm",
words:[
{vn:"Một",cn:"一",example:"Một con mèo."},
{vn:"Hai",cn:"二",example:"Hai quyển sách."},
{vn:"Ba",cn:"三",example:"Ba người."},
{vn:"Bốn",cn:"四",example:"Bốn cái ghế."},
{vn:"Năm",cn:"五",example:"Năm học sinh."}
]
},

// ========== A0 入门零基础（日常最简单单词） ==========
{
title:"A0 - Đồ vật cơ bản",
words:[
{vn:"Bút",cn:"笔",example:"Đây là cây bút."},
{vn:"Sách",cn:"书",example:"Tôi có một quyển sách."},
{vn:"Bàn",cn:"桌子",example:"Bàn này rất lớn."},
{vn:"Ghế",cn:"椅子",example:"Ngồi trên ghế đi."},
{vn:"Cốc",cn:"杯子",example:"Cốc nước đây."},
{vn:"Nước",cn:"水",example:"Tôi uống nước."},
{vn:"Ăn",cn:"吃",example:"Tôi ăn cơm."}
]
},
{
title:"A0 - Màu sắc",
words:[
{vn:"Đỏ",cn:"红色",example:"Quả táo màu đỏ."},
{vn:"Xanh",cn:"蓝色/绿色",example:"Bầu trời màu xanh."},
{vn:"Trắng",cn:"白色",example:"Áo trắng đẹp."},
{vn:"Đen",cn:"黑色",example:"Quần đen."},
{vn:"Vàng",cn:"黄色",example:"Hoa vàng."}
]
},

// ========== A1 初级（简单生活场景） ==========
{
title:"A1 - Thức ăn & Đồ uống",
words:[
{vn:"Cơm",cn:"米饭",example:"Tôi ăn cơm trưa."},
{vn:"Phở",cn:"越南粉",example:"Tôi thích ăn phở."},
{vn:"Bánh mì",cn:"法棍三明治",example:"Mua bánh mì sáng."},
{vn:"Trà",cn:"茶",example:"Uống trà nóng."},
{vn:"Cà phê",cn:"咖啡",example:"Anh uống cà phê mỗi sáng."},
{vn:"Trái cây",cn:"水果",example:"Ăn trái cây mỗi ngày."}
]
},
{
title:"A1 - Thời gian",
words:[
{vn:"Hôm nay",cn:"今天",example:"Hôm nay trời nắng."},
{vn:"Hôm qua",cn:"昨天",example:"Hôm qua tôi đi chơi."},
{vn:"Ngày mai",cn:"明天",example:"Ngày mai đi học."},
{vn:"Buổi trưa",cn:"中午",example:"Ăn trưa lúc mười hai."},
{vn:"Đêm",cn:"夜晚",example:"Đêm nay xem phim."}
]
},

// ========== A2 中初级（出行、购物、描述人物） ==========
{
title:"A2 - Đi lại & Giao thông",
words:[
{vn:"Xe máy",cn:"摩托车",example:"Người Việt hay đi xe máy."},
{vn:"Xe buýt",cn:"公交车",example:"Tôi đi xe buýt đi làm."},
{vn:"Tàu hỏa",cn:"火车",example:"Đi tàu hỏa ra Hà Nội."},
{vn:"Sân bay",cn:"机场",example:"Đến sân bay sớm."},
{vn:"Đường phố",cn:"街道",example:"Đường phố rất đông người."}
]
},
{
title:"A2 - Mua sắm",
words:[
{vn:"Giá tiền",cn:"价格",example:"Giá tiền này bao nhiêu?"},
{vn:"Rẻ",cn:"便宜",example:"Áo này rất rẻ."},
{vn:"Đắt",cn:"贵",example:"Điện thoại khá đắt."},
{vn:"Tiền",cn:"钱",example:"Tôi không mang tiền."},
{vn:"Siêu thị",cn:"超市",example:"Đi siêu thị mua đồ."}
]
},

// ========== B1 中级（工作、健康、观点表达） ==========
{
title:"B1 - Công việc & Học tập",
words:[
{vn:"Công ty",cn:"公司",example:"Anh ấy làm việc ở công ty lớn."},
{vn:"Sinh viên",cn:"大学生",example:"Tôi là sinh viên năm ba."},
{vn:"Bài tập",cn:"作业",example:"Tôi làm bài tập tối nay."},
{vn:"Họp",cn:"会议",example:"Chúng tôi có họp sáng mai."},
{vn:"Kinh nghiệm",cn:"经验",example:"Anh có nhiều kinh nghiệm làm việc."}
]
},
{
title:"B1 - Sức khỏe",
words:[
{vn:"Bệnh viện",cn:"医院",example:"Đi bệnh viện khám bệnh."},
{vn:"Đau đầu",cn:"头痛",example:"Tôi bị đau đầu hôm nay."},
{vn:"Thuốc",cn:"药",example:"Uống thuốc sau bữa ăn."},
{vn:"Tập thể dục",cn:"锻炼身体",example:"Tập thể dục mỗi buổi sáng."},
{vn:"Ngủ ngon",cn:"睡好",example:"Cần ngủ ngon để khỏe."}
]
},

// ========== B2 中高级（社会、情感、深度交流） ==========
{
title:"B2 - Xã hội & Văn hóa",
words:[
{vn:"Truyền thống",cn:"传统",example:"Giữ gìn văn hóa truyền thống Việt Nam."},
{vn:"Du lịch",cn:"旅游",example:"Du lịch giúp mở rộng tầm nhìn."},
{vn:"Môi trường",cn:"环境",example:"Chúng ta cần bảo vệ môi trường."},
{vn:"Phát triển",cn:"发展",example:"Thành phố đang phát triển nhanh."},
{vn:"Cộng đồng",cn:"社区",example:"Hoạt động cộng đồng rất ý nghĩa."}
]
},
{
title:"B2 - Cảm xúc & Quan điểm",
words:[
{vn:"Hài lòng",cn:"满意",example:"Tôi rất hài lòng với kết quả."},
{vn:"Lo lắng",cn:"担心",example:"Mẹ lo lắng cho con đi xa."},
{vn:"Đồng ý",cn:"同意",example:"Tôi hoàn toàn đồng ý ý kiến bạn."},
{vn:"Phản đối",cn:"反对",example:"Nhiều người phản đối kế hoạch này."},
{vn:"Trân trọng",cn:"珍惜、重视",example:"Trân trọng tình bạn lâu năm."}
]
}
];
