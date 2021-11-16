import * as React from 'react';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ManageAllOrders = () => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [orders, setOrders] = useState([]);

      useEffect(()=>{
      const url = `http://localhost:5000/order`
      fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data))
    },[]);

    const deleteItem = (id) => {
      console.log('order id' ,id)
       const confirmation = window.confirm('Do you want to remove this order!!')
        if(confirmation){
            fetch(`http://localhost:5000/order/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const filterdata = orders.filter(order => id !== order._id);
                setOrders(filterdata);
            })
        }
    }
    return (
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Total {orders.length} number of orders 
            </Typography>
            <Demo>
              <List dense={dense}>
                {
                  orders.map(order =>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon onClick={ () => deleteItem(order._id)} />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          {/* <FolderIcon /> */}
                          <img src={order.product.imgurl} alt="" width="35"/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={order.product.pname}
                        secondary={order.status}
                      />
                    </ListItem>,
                  )
                }
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    );
}

export default ManageAllOrders;