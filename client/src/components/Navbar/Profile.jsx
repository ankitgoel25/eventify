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
    <Menu flip>
      <MenuButton>
        <Avatar
          name='User'
          bg='brand.400'
          src={randomAvatar}
          onClick={onClick}
        />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdLogout />}>
          <span>Logout</span>
        </MenuItem>
        <MenuItem icon={<MdSettings />}>
          <span>Settings</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
