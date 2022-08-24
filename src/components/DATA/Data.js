//sidebar imports



import
{
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
 } from '@iconscout/react-unicons';



 //import images

import img1 from '../img/profile1.jpg';
import img2 from '../img/profile2.jpg';
import img3 from '../img/profile4.jpg';



 //sidebar data

 export const SidebarData=[
    {
        icon:UilEstate,
        heading:"Dashboard",

    },
    {
        icon:UilClipboardAlt,
        heading:"Analysis",
    },
    {
        icon:UilUsersAlt,
        heading:"Documents",
    },
    {
        icon:UilPackage,
        heading:"Inbox"
    },
    {
        icon:UilChart,
        heading:"History"
    },
    {
        icon:UilSignOutAlt,
        heading:"Settings"
    },


 ];
 export const cardsData = [
    {
      title: "Medicine",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25 courses",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Engineering",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14 courses",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Arts",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "20 courses",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];



  export const UpdatesData=[
    {
    img:img1,
    name:"John",
    msg:"Has enrolled for Engineering",
    time:"25 seconds ago",
    },
    {
      img:img2,
    name:"Casandra",
    msg:"Has enrolled for Medicine",
    time:"15 seconds ago",
    },
    {
      img:img3,
    name:"Eclair",
    msg:"Has enrolled for Arts",
    time:"35 seconds ago",
    },
    {
      img:img3,
    name:"Cupcake",
    msg:"Has enrolled for Arts",
    time:"30 minutes ago",
    },
    {
      img:img2,
    name:"jessica",
    msg:"Has enrolled for Medicine",
    time:"40 minutes ago",
    },

    
  ]