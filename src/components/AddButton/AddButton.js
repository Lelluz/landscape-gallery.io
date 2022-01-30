import React, { Component } from 'react';
import { Box, Button } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

class AddButton extends Component {
  render() {
    return (
      <Box>
        <input
            accept="image/*"
            id="button-add-picture"
            multiple
            type="file"
            onChange={this.handleAdd}
            style={{ display: 'none' }}
        />
        <label htmlFor="button-add-picture">
          <Button variant="contained"
            size="large"
            color="secondary"
            component="span"
          >
            <AddAPhotoIcon />
          </Button>
        </label>
      </Box>
    );
  }
}
export default AddButton