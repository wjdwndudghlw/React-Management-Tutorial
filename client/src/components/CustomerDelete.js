import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class CustomerDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleClickopen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }
    deleteCustomer(id) {
        const url = "api/customers/" + id;
        // fetch(url, {
        //     method: "DELETE"
        // }).then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         this.props.stateRefresh();
        //     })
        //     .catch(err => console.log(err));

        fetch(url, {
            method: "DELETE"
        });
        this.props.stateRefresh();
        
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickopen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 고객정보가 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="secondary" onClick={() => this.deleteCustomer(this.props.id)}>삭제</Button>
                        <Button variant="outlined" color="secondary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        

        )
    }
}

export default CustomerDelete;