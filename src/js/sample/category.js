const categories = [
    {
        id: 1,
        name: "식품",
        subCategories: [
            {
                id : 11,
                name: "과일",
                subCategories: []
            },
            {
                id : 12,
                name: "채소",
                subCategories: []
            },
            {
                id : 13,
                name: "고기",
                subCategories: []
            }
        ]
    },
    {
        id: 2,
        name: "전자기기",
        subCategories: [
            {
                id : 21,
                name: "카메라",
                subCategories: []
            },
            {
                id : 22,
                name: "컴퓨터",
                subCategories: []
            },
            {
                id : 23,
                name: "핸드폰",
                subCategories: []
            }
        ]
    },
    {
        id: 3,
        name: "출산/유아용품",
        subCategories: [
            {
                id : 31,
                name: "장난감",
                subCategories: []
            },
            {
                id : 32,
                name: "책",
                subCategories: []
            }
        ]
    },
    {
        id: 4,
        name: "스포츠용품",
        subCategories: [
            {
                id : 41,
                name: "야구용품",
                subCategories: []
            },
            {
                id : 42,
                name: "축구용품",
                subCategories: []
            },
            {
                id : 43,
                name: "배드민턴용품",
                subCategories: []
            },
            {
                id : 44,
                name: "탁구/테니스용품",
                subCategories: []
            }
        ]
    },
    {
        id: 5,
        name: "완구/취미",
        subCategories: [
            {
                id : 51,
                name: "보드게임",
                subCategories: []
            },
            {
                id : 52,
                name: "실내대형완구",
                subCategories: []
            },
            {
                id : 53,
                name: "인형",
                subCategories: []
            },
            {
                id : 54,
                name: "프라모델",
                subCategories: []
            }
        ]
    },
    {
        id: 6,
        name: "반려동물용품",
        subCategories: [
            {
                id : 61,
                name: "강아지사료",
                subCategories: []
            },
            {
                id : 62,
                name: "강아지간식",
                subCategories: []
            },
            {
                id : 63,
                name: "고양이사료",
                subCategories: []
            },
            {
                id : 64,
                name: "고양이간식",
                subCategories: []
            },
            {
                id : 65,
                name: "영양제",
                subCategories: []
            },
            {
                id : 66,
                name: "기타용품",
                subCategories: []
            }
        ]
    },
    {
        id: 7,
        name: "도서/음반/DVD",
        subCategories: [
            {
                id : 71,
                name: "소설/에세이",
                subCategories: []
            },
            {
                id : 72,
                name: "자기계발/외국어",
                subCategories: []
            },
            {
                id : 73,
                name: "트로트/고전음악",
                subCategories: []
            },
            {
                id : 74,
                name: "대중가요/K-POP",
                subCategories: []
            },
            {
                id : 75,
                name: "기타",
                subCategories: []
            }
        ]
    },
    {
        id: 8,
        name: "뷰티",
        subCategories: [
            {
                id : 81,
                name: "헤어용품",
                subCategories: []
            },
            {
                id : 82,
                name: "피부미용",
                subCategories: []
            },
            {
                id : 83,
                name: "화장품/영양제",
                subCategories: []
            },
            {
                id : 84,
                name: "기타",
                subCategories: []
            }
        ]
    },
    {
        id: 9,
        name: "홈인테리어",
        subCategories: [
            {
                id : 91,
                name: "가구",
                subCategories: []
            },
            {
                id : 92,
                name: "침구",
                subCategories: []
            },
            {
                id : 93,
                name: "욕실용품",
                subCategories: []
            },
            {
                id : 94,
                name: "기타",
                subCategories: []
            }
        ]
    },
    {
        id: 10,
        name: "가전디지털",
        subCategories: [
            {
                id : 101,
                name: "핸드폰",
                subCategories: []
            },
            {
                id : 102,
                name: "컴퓨터/노트북",
                subCategories: []
            },
            {
                id : 103,
                name: "태블릿PC",
                subCategories: []
            },
            {
                id : 104,
                name: "기타",
                subCategories: []
            }
        ]
    }
]

export function getCategories(){
    return categories;
}

export function getCategory(categoryId){
    return categories.find(({ id }) => id == categoryId);
}

export function getSubCategories({ categoryId, subCategoryId }) {
    return categories
      .find(({ id }) => id === categoryId)
      .subCategories.find(({ id }) => id == subCategoryId);
  }