import React from 'react'

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
    addInput = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    }
    render() {
        return (
            <div className='ui main'>
                <h2>add contact </h2>
                <form className='ui form' onSubmit={this.addInput}>
                    <div className="field">
                        <label> Name</label>
                        <input type="text" name='name' onChange={(e) => { this.setState({ name: e.target.value }) }} placeholder='Name' />
                    </div>

                    <div className="field">
                        <label> Email</label>
                        <input type="text" name='email' onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder='email@gmail.Com' />
                    </div>
                    <button className='ui button blue'>Add contact</button>

                </form>
            </div>
        )

    }
}
export default AddContact