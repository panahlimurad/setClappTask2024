import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';


interface FormData {
    product: string;
    price: number;
    stock: number;
  }

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const productInputRef = React.useRef<HTMLInputElement>(null);
  const priceInputRef = React.useRef<HTMLInputElement>(null);
  const stockInputRef = React.useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  
  const onSubmit = () => {
    if (productInputRef.current && priceInputRef.current && stockInputRef.current) {
        const productInput = productInputRef.current;
        const priceInput = priceInputRef.current;
        const stockInput = stockInputRef.current;
        const newObj = {
            brand: productInput.value, 
            price: priceInput.value, 
            stock: stockInput.value, 

        }
        localStorage.setItem('CreateStore', JSON.stringify(newObj));
        
      }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog
        onSubmit={handleSubmit(onSubmit)}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            inputRef={productInputRef}
            autoFocus
            required
            margin="dense"
            id="name"
            name="product"
            label="Product Name"
            type="text"
            fullWidth
            variant="standard"
          />
          {errors.product &&<span>This Field is required</span> }
           <TextField
           inputRef={priceInputRef}
            autoFocus
            required
            margin="dense"
            id="name"
            name="price"
            label="Product Price"
            type="text"
            fullWidth
            variant="standard"
          />
          {errors.price &&<span>This Field is required</span> }
          <TextField
          inputRef={stockInputRef}
            autoFocus
            required
            margin="dense"
            id="name"
            name="stock"
            label="Product Stock"
            type="text"
            fullWidth
            variant="standard"
          />
          {errors.stock &&<span>This Field is required</span> }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}