import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useMemo } from 'react';
import { MdLogout, MdSettings } from 'react-icons/md';

const Profile = ({ onClick }) => {
  const randomAvatar = useMemo(
    () =>
      `https://avatars.dicebear.com/api/avataaars/${Math.random() * 10e9}.svg`,
    [],
  );

  return (
    <Menu placement='bottom-end' gutter='4'>
      <MenuButton>
        <Avatar name='User' bg='brand.400' src={randomAvatar} />
      </MenuButton>
      <MenuList minW='160px'>
        <MenuItem icon={<MdLogout />} onClick={onClick}>
          Logout
        </MenuItem>
        <MenuItem icon={<MdSettings />}>Settings</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
