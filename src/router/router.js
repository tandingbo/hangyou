import main from '../pages/main'
import home from '../pages/home/homeMain'
import preMain from '../pages/predatemine/preMain'
import mine from '../pages/mine/mineMain'
import search from '../pages/home/search'
import goodDetail from '../pages/predatemine/goodDetail'
import predatemine from '../pages/predatemine/predatemine'
import hotelFlightDetail from '../pages/predatemine/hotelFlightDetail'
import travelerInfo from '../pages/predatemine/travelerInfo'
import chooseSpecial from '../pages/predatemine/chooseSpecial'
import completeInfo from '../pages/predatemine/completeInfo'
import msg from '../pages/mine/msg'
import setting from '../pages/mine/setting'
import aboutUs from '../pages//mine/aboutUs'

const path = [
    {
        path: '/',
        component: main, 
        children: [
            {
                path: '/',
                component: home
            },
            {
                path: '/home',
                component: home
            },
            {
                path: '/preMain',
                component: preMain,
            },
            {
                path: '/mine',
                component: mine
            }
        ]
    },
    {
        path: '/search',
        component: search
    },{
        path: '/goodDetail',
        component: goodDetail
    },{
        path: '/predatemine',
        component: predatemine
    },{
        path: '/hotelFlightDetail',
        component: hotelFlightDetail
    },{
        path: '/chooseSpecial',
        component: chooseSpecial
    },{
        path:  '/completeInfo',
        component: completeInfo
    },{
        path: '/travelerInfo',
        component: travelerInfo
    },{
        path: '/msg',
        component: msg
    },{
        path: '/setting',
        component: setting
    },{
        path: '/aboutUs',
        component: aboutUs
    }
]

export default path
