import React, {Component} from "react";


class Card extends Component {
  render() {
    const {id, name, email} = this.props;
    return (
        <div className='text-center bg-info d-inline-block rounded-lg p-3 m-2 grow border border-dark shadow-lg'>
          <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
          <div>
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>
    );
  }
}

export default Card;
