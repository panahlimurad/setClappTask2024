import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  product: string;
  price: number;
  stock: number;
}

export default function FormDialog() {
  const [open, setOpen] = React.useState<boolean>(false);
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    localStorage.setItem('CreateStore', JSON.stringify(data));
    setOpen(false);
    toast.success("Product created in localStorage", {autoClose: 1000});
  };

  const handleClickOpen = ():void => {
    setOpen(true);
  };

  const handleClose = ():void => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button sx={{ marginTop: "50px", marginLeft: "30px" }} variant="outlined" onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Create Product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
            <TextField
              {...register('product', { required: true })}
              autoFocus
              margin="dense"
              id="productName"
              label="Product Name"
              type="text"
              fullWidth
              variant="standard"
            />
            {errors.product && <span>This Field is required</span>}
            <TextField
              {...register('price', { required: true })}
              autoFocus
              margin="dense"
              id="productPrice"
              label="Product Price"
              type="number"
              fullWidth
              variant="standard"
            />
            {errors.price && <span>This Field is required</span>}
            <TextField
              {...register('stock', { required: true })}
              autoFocus
              margin="dense"
              id="productStock"
              label="Product Stock"
              type="number"
              fullWidth
              variant="standard"
            />
            {errors.stock && <span>This Field is required</span>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button disabled={!isDirty || !isValid} type="submit">Subscribe</Button>
          </DialogActions>
        </form>
      </Dialog>
      <ToastContainer />
    </React.Fragment>
  );
}
