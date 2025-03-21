import React from "react";
import "../directory/Directory.scss";
import MenuItem from "../menu-item/MenuItem.jsx";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        { title: "hats", 
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl : 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl : ''
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl : ''
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          size: "large",
          linkUrl : ''
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          size: "large",
          linkUrl : ''
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...othersectionProps }) => (
          <MenuItem {...othersectionProps} key={id} />
        ))}
      </div>
    );
  }
}

export default Directory;
