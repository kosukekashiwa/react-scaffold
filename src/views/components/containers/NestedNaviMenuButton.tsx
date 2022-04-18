import React, { useCallback, useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BaseNaviMenuButton from '~/views/components/containers/BaseNaviMenuButton';

export type NestedNaviMenuButtonProps = {
  label: string;
  items: { label: string; onClick: () => void }[];
};

const NestedNaviMenuButton: React.VFC<NestedNaviMenuButtonProps> = ({ label, items }) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = useCallback((): void => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <BaseNaviMenuButton onClick={handleClick}>
        <ListItemText primary={label} sx={{ whiteSpace: 'nowrap' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </BaseNaviMenuButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item) => (
            <ListItemButton key={item.label} sx={{ pl: 4 }} onClick={item.onClick}>
              <ListItemText primary={item.label} sx={{ whiteSpace: 'nowrap' }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NestedNaviMenuButton;
