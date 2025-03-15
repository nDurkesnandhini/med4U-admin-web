import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';
import UserRoleCreateModals from "./CreateRole";

function PageHeader() {
  const [modalOpen, setMadalOpen] = useState(false);
  
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const handleModalClose = () => {
    setMadalOpen(false);
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          User Management
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={()=>setMadalOpen(true)}
        >
          Create Roles
        </Button>
        <UserRoleCreateModals open={modalOpen} handleModalClose={handleModalClose}/>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
