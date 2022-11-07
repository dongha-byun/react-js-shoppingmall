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
        name: "완구/취미"
    },
    {
        id: 6,
        name: "반려동물용품"
    },
    {
        id: 7,
        name: "도서/음반/DVD"
    },
    {
        id: 8,
        name: "뷰티"
    },
    {
        id: 9,
        name: "홈인테리어"
    },
    {
        id: 10,
        name: "가전디지털"
    },
    {
        id: 11,
        name: "문구/오피스"
    },
    {
        id: 12,
        name: "여행"
    }
    ,
    {
        id: 13,
        name: "패션/의류"
    }
    ,
    {
        id: 14,
        name: "자동차용품"
    }
    ,
    {
        id: 15,
        name: "생활용품"
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