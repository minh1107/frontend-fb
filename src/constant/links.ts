import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import iconImage from 'image/navigate.png'

const homeLink = [
    {
        id: 1,
        name: 'Home',
        link: '/',
        icon: HomeIcon
    },
    {
        id: 2,
        name: 'Friends',
        link: '/friends',
        icon: GroupIcon
    },
    {
        id: 3,
        name: 'Video',
        link: '/video',
        icon: SmartDisplayIcon
    },
    {
        id: 4,
        name: 'Marketplace',
        link: '/marketplace',
        icon: StorefrontIcon
    },
    {
        id: 5,
        name: 'Group',
        link: '/Group',
        icon: GroupWorkIcon
    }
]


const homeNavigate = [
    {
        id: 1,
        name: 'Bạn bè',
        link: '/friends',
        position:  -296
    },
    {
        id: 1,
        name: 'Nhóm',
        link: '/group',
        position: -37
    },
    {
        id: 1,
        name: 'Video',
        link: '/video',
        position:-518
    },
    {
        id: 1,
        name: 'Lịch sử hoạt động',
        link: '/history',
        position:  -185
    },
    {
        id: 1,
        name: 'Đã lưu',
        link: '/postsaved',
        position: -444
    },
]

const homeNavigateGroup = [
    {
        id: 1,
        name: 'Bạn bè',
        link: 'Nhóm',
        icon: 'Video'
    },
    {
        id: 1,
        name: 'Bạn bè',
        link: 'Nhóm',
        icon: 'Video'
    },
    {
        id: 1,
        name: 'Bạn bè',
        link: 'Nhóm',
        icon: 'Video'
    },
    {
        id: 1,
        name: 'Bạn bè',
        link: 'Nhóm',
        icon: 'Video'
    },
    {
        id: 1,
        name: 'Bạn bè',
        link: 'Nhóm',
        icon: 'Video'
    },
]

export {homeLink, homeNavigate, homeNavigateGroup}