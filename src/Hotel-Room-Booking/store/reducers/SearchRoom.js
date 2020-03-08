import * as actionTypes from "../actions/actionTypes";

let initialState = 
[{
    id : 1,
    name : "single bed-room",
    img : require("../../assets/img/rooms/room1.jpg"),
    price : "8000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    },
{
    id : 2,
    name : "double bed-room",
    img : require("../../assets/img/rooms/room2.jpg"),
    price : "10000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 3,
    name : "luxury bed-room",
    img : require("../../assets/img/rooms/room3.jpg"),
    price : "15000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 4,
    name : "single bed-room",
    img : require("../../assets/img/rooms/room4.jpg"),
    price : "8000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 5,
    name : "single bed-room",
    img : require("../../assets/img/rooms/room5.jpg"),
    price : "8000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 6,
    name : "single bed-room",
    img : require("../../assets/img/rooms/room6.jpg"),
    price : "8000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 7,
    name : "double bed-room",
    img : require("../../assets/img/rooms/room7.jpg"),
    price : "10000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 8,
    name : "single bed-room",
    img : require("../../assets/img/rooms/room8.jpg"),
    price : "8000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 9,
    name : "double bed-room",
    img : require("../../assets/img/rooms/room9.jpeg"),
    price : "10000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 10,
    name : "double bed-room",
    img : require("../../assets/img/rooms/room10.jpg"),
    price : "10000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 11,
    name : "double bed-room",
    img : require("../../assets/img/rooms/room11.jpg"),
    price : "10000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 12,
    name : "luxury bed-room",
    img : require("../../assets/img/rooms/room12.jpg"),
    price : "15000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 13,
    name : "luxury bed-room",
    img : require("../../assets/img/rooms/room13.jpg"),
    price : "20000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 14,
    name : "luxury bed-room",
    img : require("../../assets/img/rooms/room14.jpg"),
    price : "16000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
},
{
    id : 15,
    name : "luxury bed-room",
    img : require("../../assets/img/rooms/room15.jpg"),
    price : "20000",
    info: "Dolore excepteur enim voluptate et magna amet quis enim. Consequat sint mollit reprehenderit tempor laboris. Do pariatur laboris laboris culpa.Excepteur consectetur ut ad culpa sint nisi. Nisi cillum nostrud aliqua et enim et ad exercitation nisi tempor tempor aute nostrud nisi. Lorem aliquip excepteur consectetur excepteur exercitation eiusmod et culpa fugiat minim. Nisi nisi magna proident cupidatat et anim amet. Ex cupidatat eu cupidatat reprehenderit mollit esse. Officia qui nulla est non culpa. Amet sunt eiusmod duis ut ullamco pariatur ea reprehenderit voluptate.Laboris eiusmod minim sint consequat laborum laboris qui. Est est eu qui esse mollit occaecat consectetur ea adipisicing elit labore qui. Excepteur dolore dolore id est tempor proident elit consectetur voluptate id laboris ea velit et. Deserunt cupidatat Lorem pariatur adipisicing sint nisi. Commodo sit amet aute aliquip exercitation. Nisi reprehenderit minim amet enim id dolore est non. Laboris et mollit aute anim id irure adipisicing veniam elit tempor magna ea",
    
}];

const searchRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_ROOM:
            state = initialState            
            let value = action.value;
            let Arr  = [...state];

            let newArr = Arr.filter((i) => {
                return i.name.includes(value)
            });            
            return newArr;
            
        default:
            return [...state]
    };
};

export default searchRoomReducer;