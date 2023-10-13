import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import { SvgIcon } from '@mui/material';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
import { Chat } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export const items = [
  {
    title: 'Profile',
    path: '/trainerHome',
    icon: (
      <SvgIcon fontSize="small">
        <AccountCircleIcon />
      </SvgIcon>
    )
  },
  {
    title: 'My Students',
    path: '/students',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Class Room',
    path: '/Class',
    icon: (
      <SvgIcon fontSize="small">
        <CoPresentRoundedIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Requested Trainer',
  //   path: '/trainerManage', 
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <ChartBarIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Manage Contents',
  //   path: '/manageContents',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <FeaturedPlayListSharpIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Messages',
  //   path: '/chat',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <Chat />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Account',
  //   path: '/admin/account',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },

];

