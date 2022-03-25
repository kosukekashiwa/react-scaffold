import React, { useCallback, useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BaseNaviMenuButton, { BaseNaviMenuButtonProps } from './BaseNaviMenuButton';

export type NestedNaviMenuButtonProps = Pick<BaseNaviMenuButtonProps, 'icon'> & {
  label: string;
  items: { label: string; onClick: () => void }[];
};

const NestedNaviMenuButton: React.VFC<NestedNaviMenuButtonProps> = ({ icon, label, items }) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = useCallback((): void => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <BaseNaviMenuButton onClick={handleClick} icon={icon}>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </BaseNaviMenuButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item) => (
            <ListItemButton key={item.label} sx={{ pl: 9 }} onClick={item.onClick}>
              <ListItemText primary={item.label} sx={{ whiteSpace: 'nowrap' }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NestedNaviMenuButton;
