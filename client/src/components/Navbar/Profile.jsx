import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { useMemo } from 'react';
import { IoWallet } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

const Profile = ({ onClick }) => {
  const address = useAddress();
  const randomAvatar = useMemo(
    () =>
      `https://avatars.dicebear.com/api/avataaars/${Math.random() * 10e9}.svg`,
    [],
  );

  return (
    <Menu placement='bottom-end'>
      <MenuButton>
        <Avatar name='User' bg='brand.400' src={randomAvatar} />
      </MenuButton>
      <MenuList minW='160px'>
        <MenuItem icon={<IoWallet />}>
          {`${address.substring(0, 4)}....${address.substring(
            address.length - 4,
          )}`}
        </MenuItem>
        <MenuItem icon={<MdLogout />} onClick={onClick}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
