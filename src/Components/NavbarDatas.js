
import pizzaslice from './../icons/pizza-slice.png'
import burgericon from './../icons/burger.png'
import sandwichicon from './../icons/sandwich.png'
import fastfoodicon2 from './../icons/fast-food.png'
import friedpotatoes from './../icons/fried-potatoes.png'
import bubbletea from './../icons/bubble-tea.png'
import icecream from './../icons/ice-cream.png'


const NavbarDatas = [
    {id:1,
    title:"خانه",
    link:"React-FastFoodLanding",
    menus:[],
    submenu:false
    },
    {id:2,
    title:"منوها",
    link:"React-FastFoodLanding",
    menus:[
        {id:1,title:"پیتزا", link:"React-FastFoodLanding", icon:pizzaslice},
        {id:2,title:"همبرگر", link:"React-FastFoodLanding", icon:burgericon},
        {id:3,title:"ساندویچ", link:"React-FastFoodLanding", icon:sandwichicon},
        {id:4,title:"ترکیبی ها", link:"React-FastFoodLanding", icon:fastfoodicon2},
        {id:5,title:"سالاد و پیش غذا", link:"React-FastFoodLanding", icon:friedpotatoes},
        {id:6,title:"نوشیدنی", link:"React-FastFoodLanding", icon:bubbletea},
        {id:7,title:"دسرها", link:"React-FastFoodLanding", icon:icecream}
    ],
    submenu:true
    },
    {id:3,
    title:"وبلاگ",
    link:"React-FastFoodLanding",
    menus:[],
    submenu:false

    },
    {id:4,
    title:"سفارش آنلاین",
    link:"React-FastFoodLanding",
    menus:[],
    submenu:false
    },
    {id:5,
    title:"شعبه ها",
    link:"React-FastFoodLanding",
    menus:[],
    submenu:false
    },
    {id:6,
    title:"درباره ما",
    link:"React-FastFoodLanding",
    menus:[],
    submenu:false

    },
    {id:7,
    title:"تماس با ما",
    link:"React-FastFoodLanding",
    menus:[],
    submenu:false

    },
]


export default NavbarDatas;